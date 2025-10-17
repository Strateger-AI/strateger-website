"use client";
import { ENTERPRISE_APPS_SECTION } from "@/data/industries/enterprise.data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function AppWeDevelope() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ICon2 = ENTERPRISE_APPS_SECTION.apps[activeIndex].icon;

  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className="m-auto mx-20 text-center text-3xl leading-normal font-bold whitespace-pre-line md:text-5xl">
        {ENTERPRISE_APPS_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className={"pt-5 text-center text-xl"}>
        {ENTERPRISE_APPS_SECTION.description}
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
          {ENTERPRISE_APPS_SECTION.apps.map((app, i) => {
            const Icon = app.icon;
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
                  <span>{app.title}</span>
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 py-4 text-lg text-gray-700">
                  <p>{app.desc}</p>

                  <div className="relative mt-4 h-[300px] w-full overflow-hidden rounded-lg">
                    <Image
                      src={app.img}
                      alt={app.title}
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
      <div className="relative hidden gap-4 md:flex">
        <div className={"flex flex-1 flex-col gap-8"}>
          <div className="grid grid-cols-3 gap-4 py-5 md:px-10 lg:grid-cols-2 xl:grid-cols-3">
            {ENTERPRISE_APPS_SECTION.apps.map((app, i) => {
              const Icon = app.icon;
              return (
                <button
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "shadow-primary/40 flex h-full flex-col text-primary items-center gap-2 rounded-xl border-2 border-dashed border-gray-400 px-3 py-4 text-xl font-bold transition-colors duration-300 lg:flex-row lg:px-6 lg:py-8",
                    activeIndex === i &&
                      "shadow-primary/40 bg-primary border-none text-white shadow-xl",
                  )}
                  key={i}
                >
                  <Icon className={"text-3xl"} />
                  <span>{app.title}</span>
                </button>
              );
            })}
          </div>
          <div className="flex flex-col items-start justify-around gap-4 rounded-xl bg-white p-10">
            <ICon2 className={"text-8xl text-primary"} />

            <h1 className="text-primary text-4xl font-extrabold">
              {ENTERPRISE_APPS_SECTION.apps[activeIndex].title}
            </h1>
            <p className="text-xl font-medium">
              {ENTERPRISE_APPS_SECTION.apps[activeIndex].desc}
            </p>
          </div>
        </div>
        <div className={"hidden w-2/5 lg:flex"}>
          <div className="] right-0 bottom-0 flex overflow-hidden rounded-xl md:h-[400px] lg:absolute lg:h-[700px]">
            <Image
              src={ENTERPRISE_APPS_SECTION.apps[activeIndex].img}
              alt="AR/VR Solution"
              width={500}
              height={600}
              className="z-10 self-end object-contain"
              priority
            />
            <div
              className={
                "bg-primary absolute -bottom-40 -z-10 hidden min-h-full w-full rounded-xl shadow-xl xl:block"
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
