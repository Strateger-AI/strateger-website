"use client";

import { AR_VR_SOLUTIONS_SECTION } from "@/data/services/ar-vr.data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function SolutionARDev() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className="text-center font-bold text-2xl sm:text-3xl leading-snug whitespace-pre-line md:text-5xl">
        {AR_VR_SOLUTIONS_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className={"pt-5 text-center text-sm md:text-xl"}>
        {AR_VR_SOLUTIONS_SECTION.desc}
      </p>

      {/* Small screen Accordion */}
      <div className="md:hidden">
        <Accordion
          type="single"
          collapsible
          value={String(activeIndex)}
          onValueChange={(val) => setActiveIndex(val ? Number(val) : 0)}
          className="space-y-4"
        >
          {AR_VR_SOLUTIONS_SECTION.solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <AccordionItem
                key={i}
                value={String(i)}
                className="rounded-xl border border-gray-300 shadow-md"
              >
                <AccordionTrigger
                  className={cn(
                    "flex w-full items-center gap-4 px-6 py-4 text-2xl font-semibold transition-colors",
                    activeIndex === i ? "bg-primary text-white" : "bg-white",
                  )}
                >
                  <Icon className="text-3xl" />
                  <span>{solution.title}</span>
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 py-4 text-lg text-gray-700">
                  <p>{solution.desc}</p>

                  <div className="relative mt-4 h-[300px] w-full overflow-hidden rounded-lg">
                    <Image
                      src={solution.img}
                      alt={solution.imgAltText}
                      fill
                      style={{ objectFit: "contain" }}
                      priority={activeIndex === i}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      {/* Medium+ screens: Grid + Image */}
      <div className="relative hidden h-full gap-4 md:flex items-center">
        <div className={"flex flex-1 flex-col gap-8"}>
          <div className="grid grid-cols-3 gap-4 py-5  lg:grid-cols-2 xl:grid-cols-3">
            {AR_VR_SOLUTIONS_SECTION.solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <button
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "shadow-primary/40 flex h-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-400 px-3 py-4 text-xl font-bold transition-colors duration-300 lg:flex-row lg:px-6 lg:py-8",
                    activeIndex === i &&
                      "shadow-primary/40 bg-primary border-none text-white shadow-xl",
                  )}
                  key={i}
                >
                  <Icon className={"text-3xl"} />
                  <span>{solution.title}</span>
                </button>
              );
            })}
          </div>
          <div className="flex flex-col items-start justify-around gap-4 rounded-xl bg-white p-10">
            <h1 className="text-primary text-4xl font-extrabold">
              {AR_VR_SOLUTIONS_SECTION.solutions[activeIndex].title}
            </h1>
            <p className="text-xl font-medium">
              {AR_VR_SOLUTIONS_SECTION.solutions[activeIndex].desc}
            </p>
          </div>
        </div>
        <div
          className={
            " w-2/5 h-full hidden  lg:flex  items-center justify-center     "
          }
        >
          <div className=" overflow-hidden     h-full rounded-xl ">
            <Image
              src={AR_VR_SOLUTIONS_SECTION.solutions[activeIndex].img}
              alt="AR/VR Solution"
              width={500}
              height={600}
              className=" object-cover s"
              priority
            />
            {/*<div*/}
            {/*  className={*/}
            {/*    "bg-primary absolute -bottom-40 -z-10 hidden min-h-full w-full rounded-xl shadow-xl xl:block"*/}
            {/*  }*/}
            {/*></div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
