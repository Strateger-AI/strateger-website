import { MESSAGE_FROM_CEO_SECTION } from "@/data/about-us/about-us.data";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export function MessageFromCEOSection() {
  return (
    <div className="flex flex-col md:gap-20 items-center justify-center bg-white px-5 py-10 lg:px-20">
      {MESSAGE_FROM_CEO_SECTION.messages.map((ceo, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex flex-col  xl:w-4/5 justify-around h-full gap-10 md:flex-row ${
              isEven ? "" : "md:flex-row-reverse "
            }`}
          >
            {/* Image + Background Accent */}
            <div className="relative min-h-[300px]  md:w-2/5">
              <Image
                src={ceo.img}
                alt="CEO image"
                fill
                className="!relative  z-10 min-h-[300px] min-w-full object-cover object-top rounded-xl"
              />
              <div
                className={`absolute bottom-0 h-4/5   w-3/5 rounded-xl bg-primary ${
                  isEven ? "right-20" : "left-20"
                } -z-0`}
              />
            </div>

            {/* Text Content */}
            <div className="flex w-full flex-1 items-center max-h-full justify-around">
              <div
                className={cn(
                  "flex flex-col gap-4 md:gap-5 lg:gap-7 xl:gap-10 ",
                  // isEven ? "md:text-left" : "md:text-right",
                )}
              >
                {/* Shared Heading */}
                <h1
                  className={cn(
                    "text-4xl sm:text-3xl  font-bold leading-snug whitespace-pre-line md:text-5xl",
                  )}
                >
                  {MESSAGE_FROM_CEO_SECTION.headingParts.map((part, i) => (
                    <span key={i} className={part.className}>
                      {part.text}
                    </span>
                  ))}
                </h1>

                {/* Message */}
                <p className="lg:text-lg  lg:leading-8 xl:leading-10  ">
                  {ceo.message}
                </p>

                {/* Name + Designation */}
                <h1 className="text-4xl font-bold text-primary">
                  {ceo.from.name}
                </h1>
                <h1 className="text-black text-3xl font-extrabold">
                  {ceo.from.designation}
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
