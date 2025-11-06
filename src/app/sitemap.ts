import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const isProd = baseUrl === "https://strateger.ai";

  if (!isProd) {
    return []; // skip sitemap generation on non-production environments
  }

  const staticPages = [
    "", // homepage
    "/about-us",
    "/contact",
    "/industries",
    "/industries/education-e-learning",
    "/industries/enterprise-corporate",
    "/industries/entertainment",
    "/industries/fintech",
    "/industries/healthcare-life-sciences",
    "/industries/real-estate-construction",
    "/industries/retail-ecommerce",
    "/services",
    "/services/ar-vr-development",
    "/services/cybersecurity",
    "/services/deep-learning",
    "/services/erp-implementation",
    "/services/game-development",
    "/services/mobile-app-development",
    "/terms-and-conditions",
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency:
      path === "" || path === "/services" || path === "/industries"
        ? "weekly"
        : "monthly",
    priority: path === "" ? 1.0 : path.startsWith("/services") ? 0.9 : 0.8,
  }));
}
