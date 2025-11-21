import fs from "fs/promises";
import path from "path";

const OUT_DIR = "public";
const INPUT = path.join(process.cwd(), OUT_DIR, "sitemap.xml");
const XSL_LINK = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

function groupFromLoc(loc) {
  const url = new URL(loc);
  const pathname = url.pathname.replace(/\/$/, "") || "/";

  const mainRoutes = [
    "/",
    "/about-us",
    "/contact",
    "/terms-and-conditions",
    "/services",
    "/industries",
  ];
  if (mainRoutes.includes(pathname)) return "main";
  if (pathname.startsWith("/services/")) return "services";
  if (pathname.startsWith("/industries/")) return "industries";
  return null;
}

async function main() {
  try {
    const exists = await fs
      .stat(INPUT)
      .then(() => true)
      .catch(() => false);
    if (!exists) {
      console.error(`❌ Input sitemap not found: ${INPUT}`);
      process.exit(1);
    }

    const xml = await fs.readFile(INPUT, "utf8");

    const urlBlocks = Array.from(xml.matchAll(/<url>[\s\S]*?<\/url>/g)).map(
      (m) => m[0],
    );

    const groups = {
      main: [],
      services: [],
      industries: [],
    };

    for (const block of urlBlocks) {
      const locMatch = block.match(/<loc>([\s\S]*?)<\/loc>/);
      const loc = locMatch ? locMatch[1].trim() : null;
      if (!loc) continue;
      const group = groupFromLoc(loc);
      if (group && groups[group]) groups[group].push(block);
    }

    const writeSitemap = async (filename, urls) => {
      if (!urls.length) return;
      const xmlBody = urls.join("\n");
      const xmlOut = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        XSL_LINK,
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        xmlBody,
        "</urlset>",
      ].join("\n");
      const dest = path.join(process.cwd(), OUT_DIR, filename);
      await fs.writeFile(dest, xmlOut, "utf8");
      console.log(`✅ Wrote ${filename} (${urls.length} URLs)`);
    };

    if (groups.services.length)
      await writeSitemap("sitemap-services.xml", groups.services);
    if (groups.industries.length)
      await writeSitemap("sitemap-industries.xml", groups.industries);

    // ✅ Write main sitemap.xml (only real routes)
    await writeSitemap("sitemap.xml", groups.main);

    // ✅ Build index sitemap referencing all 3
    const now = new Date().toISOString();
    const files = [
      "sitemap.xml",
      "sitemap-services.xml",
      "sitemap-industries.xml",
    ];
    const sitemapEntries = files
      .map(
        (fn) =>
          `<sitemap><loc>${
            SITE_URL
            // .replace(
            // /\/$/,
            // "",
            // )
          }/${fn}</loc><lastmod>${now}</lastmod></sitemap>`,
      )
      .join("\n");

    const indexXml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      XSL_LINK,
      '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      sitemapEntries,
      "</sitemapindex>",
    ].join("\n");

    const indexPath = path.join(process.cwd(), OUT_DIR, "sitemap-index.xml");
    await fs.writeFile(indexPath, indexXml, "utf8");

    console.log("✅ sitemap-index.xml written with all sitemap links");
    console.log("🎉 Done splitting sitemaps successfully (routes + index).");
  } catch (err) {
    console.error("🚨 Error while splitting sitemaps:", err);
    process.exit(1);
  }
}

main();
