"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SERVICES_SECTION } from "@/data/services/serices.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

// Icon mapping

export default function ServiceSection() {
  const { headingParts, description, services, CTABtnLink } = SERVICES_SECTION;

  return (
    <section className="flex flex-col items-center space-y-6 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      {/* Heading */}

      <h2 className="text-3xl text-center leading-snug font-bold md:text-4xl lg:text-5xl">
        {headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}
          </span>
        ))}
      </h2>
      <p className="text-center text-sm sm:text-xl">{description}</p>

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        className="w-full lg:max-w-4/5 space-y-4 "
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl bg-white shadow-md"
            >
              <AccordionTrigger className="px-6 py-6 group text-left hover:no-underline">
                <div className="text-primary flex items-center gap-10  sm:text-xl md:text-3xl font-semibold">
                  <Icon className="group-hover:scale-120 text-2xl transition duration-300" />
                  <span className={""}>{service.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-12 pb-6 text-sm sm:text-xl md:leading-9">
                {service.description}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      {/* CTA */}
      <CTAButton2
        className={" !text-2xl lg:!text-4xl"}
        href={CTABtnLink}
        label={SERVICES_SECTION.CTABtnText}
      />
    </section>
  );
}
