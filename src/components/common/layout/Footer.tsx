"use client";

import { FOOTER_LINKS } from "@/data/main.data";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Footer() {
  return (
    <footer className="bg-primary text-background p-6 md:p-10">
      {/* --- Desktop / Tablet View --- */}
      <div className="border-secondary hidden flex-wrap items-start justify-evenly gap-10 rounded-lg border-1 p-10 md:flex">
        {FOOTER_LINKS.map((item, index) => (
          <div className="flex min-w-[150px] flex-col gap-2" key={index}>
            <h1 className="py-2 text-2xl font-bold">{item.heading}</h1>

            {item.categories?.map((category, idx) =>
              category.href ? (
                <Link
                  key={idx}
                  href={category.href}
                  className="hover:text-secondary text-white transition-colors"
                >
                  {category.title}
                </Link>
              ) : (
                <span key={idx} className="hover:text-secondary text-white">
                  {category.title}
                </span>
              ),
            )}
          </div>
        ))}
      </div>

      {/* --- Mobile View (Accordion) --- */}
      <div className="border-b border-gray-200 p-4 md:hidden">
        <Accordion type="multiple" className="w-full space-y-2">
          {FOOTER_LINKS.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold">
                {item.heading}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 py-2 pl-4">
                  {item.categories?.map((category, idx) =>
                    category.href ? (
                      <Link
                        key={idx}
                        href={category.href}
                        className="transition-colors hover:text-gray-300"
                      >
                        {category.title}
                      </Link>
                    ) : (
                      <span
                        key={idx}
                        className="transition-colors hover:text-gray-300"
                      >
                        {category.title}
                      </span>
                    ),
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <h1 className="py-2 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}-{} Strateger AI . All rights reserved.
      </h1>
    </footer>
  );
}
