"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn, scrollToId } from "@/lib/utils";
import { ERP_TRANSFORMATION_SECTION } from "@/data/services/erp-implementation.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function ERPServicesTransformation() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-5 px-5 py-5 md:space-y-15 md:px-20 md:py-10">
      <h1 className="m-auto mx-20 text-center text-3xl leading-normal font-bold whitespace-pre-line md:text-5xl">
        {ERP_TRANSFORMATION_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className="pt-5 text-center text-xl">
        {ERP_TRANSFORMATION_SECTION.description}
      </p>

      {/* Mobile View: Accordion */}
      <div className="md:hidden">
        <Accordion
          type="single"
          collapsible
          value={String(activeIndex)}
          onValueChange={(val) => setActiveIndex(val ? Number(val) : 0)}
          className="space-y-4"
        >
          {ERP_TRANSFORMATION_SECTION.benefits.map((benifit, i) => {
            const Icon = benifit.icon;
            return (
              <AccordionItem
                key={i}
                value={String(i)}
                className="rounded-xl border border-gray-300 shadow-md"
              >
                <AccordionTrigger
                  className={cn(
                    "flex w-full items-center gap-4 px-6 py-4 text-xl font-semibold transition-colors",
                    activeIndex === i ? "bg-primary text-white" : "bg-white",
                  )}
                >
                  <Icon className="text-3xl" />
                  <span>{benifit.title}</span>
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 py-4 text-lg text-gray-700">
                  <p>{benifit.desc}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      {/* Desktop View: Buttons on Left, Description on Right */}
      <div className="bg-primary hidden h-full items-center justify-around gap-5 rounded-xl p-5 md:flex md:flex-col lg:flex-row lg:gap-10 xl:p-15">
        <div className="grid gap-2 text-center md:w-full md:grid-cols-5 lg:w-2/5 lg:grid-cols-1 lg:text-start xl:grid-cols-2">
          {ERP_TRANSFORMATION_SECTION.benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "text-md flex flex-col items-center gap-4 py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-110 lg:flex-row lg:justify-start",
                  activeIndex === i && "text-secondary",
                )}
              >
                <Icon className="text-3xl" />
                <span className={"lg:text-start"}>{benefit.title}</span>
              </button>
            );
          })}
        </div>

        {/* Right Side: Icon + Description */}
        <div className="flex min-h-4/5 flex-col justify-center gap-6 rounded-xl bg-white p-8 shadow-md lg:aspect-square lg:w-3/5 xl:aspect-auto">
          <div className="text-primary flex items-center gap-4">
            <h2 className="text-3xl font-bold">
              {ERP_TRANSFORMATION_SECTION.benefits[activeIndex].title}
            </h2>
          </div>
          <p className="text-lg lg:w-4/5">
            {ERP_TRANSFORMATION_SECTION.benefits[activeIndex].desc}
          </p>
        </div>
      </div>
      <CTAButton2
        className={"text-primary"}
        label={ERP_TRANSFORMATION_SECTION.CTABtnText}
        onClick={() => {
          scrollToId();
        }}
        // href={ERP_TRANSFORMATION_SECTION.CTABtnLink}
      />
    </div>
  );
}
