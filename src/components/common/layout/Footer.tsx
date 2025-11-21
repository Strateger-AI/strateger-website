// "use client";
//
// import { FOOTER_LINKS } from "@/data/main.data";
// import Link from "next/link";

//
// export function Footer() {
//   return (
//     <footer className="bg-primary text-background p-6 md:p-10">
//       {/* --- Desktop / Tablet View --- */}
//       <div className="border-secondary hidden flex-wrap items-start justify-evenly gap-10 rounded-lg border-1 p-10 md:flex">
//         {FOOTER_LINKS.map((item, index) => (
//           <div className="flex min-w-[150px] flex-col gap-2" key={index}>
//             <h1 className="py-2 text-2xl font-bold">{item.heading}</h1>
//
//             {item.categories?.map((category, idx) => {
//               if ("href" in category) {
//                 const isExternal = category.href.startsWith("http");
//
//                 return isExternal ? (
//                   <a
//                     key={idx}
//                     href={category.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-secondary text-white transition-colors"
//                   >
//                     {category.title}
//                   </a>
//                 ) : (
//                   <Link
//                     key={idx}
//                     href={category.href}
//                     className="hover:text-secondary text-white transition-colors"
//                   >
//                     {category.title}
//                   </Link>
//                 );
//               }
//
//               // fallback if no href
//               return (
//                 <span key={idx} className="hover:text-secondary text-white">
//                   {category.title}
//                 </span>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//
//       {/* --- Mobile View (Accordion) --- */}
//       <div className="border-b border-gray-200 p-4 md:hidden">
//         <Accordion type="multiple" className="w-full space-y-2">
//           {FOOTER_LINKS.map((item, index) => (
//             <AccordionItem key={index} value={`item-${index}`}>
//               <AccordionTrigger className="text-lg font-semibold">
//                 {item.heading}
//               </AccordionTrigger>
//               <AccordionContent>
//                 <div className="flex flex-col gap-2 py-2 pl-4">
//                   {item.categories?.map((category, idx) => {
//                     if ("href" in category) {
//                       return (
//                         <Link
//                           key={idx}
//                           href={category.href}
//                           className="transition-colors hover:text-gray-300"
//                         >
//                           {category.title}
//                         </Link>
//                       );
//                     }
//
//                     return (
//                       <span
//                         key={idx}
//                         className="transition-colors hover:text-gray-300"
//                       >
//                         {category.title}
//                       </span>
//                     );
//                   })}
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//       <h1 className="py-2 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()}-{} Strateger AI . All rights reserved.
//       </h1>
//     </footer>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "@/data/main.data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HiOfficeBuilding } from "react-icons/hi";
import Container from "@/components/common/Container";

export function Footer() {
  const socialSection = FOOTER_LINKS.find(
    (item) => item.heading === "Connect With Us",
  );

  const filteredLinks = FOOTER_LINKS.filter(
    (item) => item.heading !== "Location" && item.heading !== "Connect With Us",
  );
  const filteredLinksWithoutSocial = FOOTER_LINKS.filter(
    (item) => item.heading !== "Connect With Us",
  );

  const locationData = FOOTER_LINKS.find((item) => item.heading === "Location");

  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-background px-5 md:px-10 lg:px-4 py-10">
      <Container className={"!pt-0"}>
        {/* === DESKTOP / TABLET VIEW === */}
        <div className="hidden lg:mx-auto space-y-10 lg:max-w-[90rem] px-4 md:flex md:flex-col itemsc">
          {/* === TOP SECTION === */}
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
            {/* --- Left: Logo --- */}
            <div className="flex flex-col items-center lg:items-start  justify-center gap-8 lg:w-2/5">
              <div className="flex items-center gap-4">
                {/* Optional logo */}
                <Image
                  src="/strateger_logo.png"
                  alt="Strateger Logo"
                  width={35}
                  height={35}
                  className="object-contain"
                />

                {/* Site name */}
                <h1 className="text-3xl font-bold text-white">Strateger AI</h1>
              </div>
              <div className="text-white hidden lg:block  ">
                {/*<h2 className="mb-6 text-2xl font-bold">Our Locations</h2>*/}
                <div className="flex gap-8 lg:flex-row lg:gap-16">
                  {locationData?.categories.map((loc, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-start gap-2 text-white"
                    >
                      <div className="flex items-start gap-3">
                        <HiOfficeBuilding
                          className="text-secondary mt-1"
                          size={22}
                        />
                        <div>
                          <span className="text-lg font-semibold">
                            {loc.title}
                          </span>
                          {"address" in loc && loc.address && (
                            <p className="text-sm text-gray-300">
                              {loc.address}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="  hidden lg:flex items-center gap-4 lg:gap-6">
                {socialSection?.categories?.map((social, idx) => {
                  // Only proceed if social has both icon and href
                  if (!("icon" in social) || !("href" in social)) return null;

                  const Icon = social.icon;

                  return (
                    <Link
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-transform duration-300 hover:scale-125 hover:text-secondary"
                    >
                      <Icon className="text-3xl lg:text-4xl" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* --- Right: Footer Link Groups (excluding Location) --- */}
            <div className="flex items-start justify-around flex-1 ">
              {filteredLinks.map((section, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="pb-2 text-xl font-bold text-white">
                    {section.heading}
                  </h3>
                  {section.categories?.map((category, idx) => {
                    const isExternal =
                      "href" in category && category.href?.startsWith("http");

                    if ("href" in category && category.href) {
                      return isExternal ? (
                        <a
                          key={idx}
                          href={category.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white transition-colors hover:text-secondary"
                        >
                          {category.title}
                        </a>
                      ) : (
                        <Link
                          key={idx}
                          href={category.href}
                          className="text-sm text-white transition-colors hover:text-secondary"
                        >
                          {category.title}
                        </Link>
                      );
                    }

                    return (
                      <span
                        key={idx}
                        className="text-sm text-white transition-colors hover:text-secondary"
                      >
                        {category.title}
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="text-white block lg:hidden  ">
            <h2 className="mb-6 text-2xl text-center font-bold">
              Our Locations
            </h2>
            <div className="flex gap-8 lg:flex-row justify-center lg:gap-16">
              {locationData?.categories?.map((loc, idx) => {
                // Only render if loc has a title (should always exist)
                if (!loc.title) return null;

                return (
                  <div
                    key={idx}
                    className="flex flex-col items-start gap-2 text-white"
                  >
                    <div className="flex items-start gap-3">
                      <HiOfficeBuilding
                        className="text-secondary mt-1"
                        size={22}
                      />
                      <div>
                        <span className="text-lg font-semibold">
                          {loc.title}
                        </span>

                        {/* Only render address if loc has it */}
                        {"address" in loc && loc.address && (
                          <p className="text-sm text-gray-300">{loc.address}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* === LOCATIONS + SOCIALS === */}
          <div className="flex  items-center justify-center">
            {/* Locations */}

            {/* Socials */}
            <div className="flex lg:hidden items-center gap-4 lg:gap-6">
              {socialSection?.categories?.map((social, idx) => {
                // Only proceed if social has both icon and href
                if (!("icon" in social) || !("href" in social)) return null;

                const Icon = social.icon;

                return (
                  <Link
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-transform duration-300 hover:scale-125 hover:text-secondary"
                  >
                    <Icon className="text-3xl lg:text-4xl" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* === BOTTOM SECTION === */}
          <h1 className="text-sm  text-center border-t-[1px] border-white py-4 text-gray-400">
            © {new Date().getFullYear()} Strateger LLC. All rights reserved.
          </h1>
        </div>

        {/* === MOBILE VIEW (Accordion) === */}
        <div className="md:hidden  ">
          <Accordion type="multiple" className="w-full space-y-2">
            {filteredLinksWithoutSocial.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-white">
                  {item.heading}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 py-2 pl-4">
                    {item.categories?.map((category, idx) => {
                      if ("href" in category && category.href) {
                        return (
                          <Link
                            key={idx}
                            href={category.href}
                            className="text-gray-300 hover:text-secondary transition-colors"
                          >
                            {category.title}
                          </Link>
                        );
                      }
                      return (
                        <span
                          key={idx}
                          className="text-gray-300 hover:text-secondary transition-colors"
                        >
                          {"address" in category
                            ? `${category.title} - ${category.address}`
                            : category.title}
                        </span>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-6 flex justify-center gap-5">
            {socialSection?.categories?.map((social, idx) => {
              if (!("icon" in social) || !("href" in social)) return null;
              const Icon = social?.icon;

              return (
                <Link
                  key={idx}
                  href={social.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-transform duration-300 hover:scale-110 hover:text-secondary"
                >
                  <Icon className="text-3xl" />
                </Link>
              );
            })}
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Strateger LLC. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
