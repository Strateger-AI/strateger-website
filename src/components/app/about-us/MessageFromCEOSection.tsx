import { MESSAGE_FROM_CEO_SECTION } from "@/data/about-us/about-us.data";
import Image from "next/image";
import React from "react";

export function MessageFromCEOSection() {
  return (
    <div className="flex flex-col gap-20 bg-white px-5 py-10 md:px-20">
      {MESSAGE_FROM_CEO_SECTION.messages.map((ceo, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex flex-col  items-center justify-around gap-10 md:flex-row ${
              isEven ? "" : "md:flex-row-reverse text-left"
            }`}
          >
            {/* Image + Background Accent */}
            <div className="relative w-3/5 md:w-2/5">
              <Image
                src={ceo.img}
                alt="CEO image"
                fill
                className="!relative z-10 min-h-[400px] object-cover object-top rounded-xl"
              />
              <div
                className={`absolute top-0 h-full w-3/5 rounded-xl bg-primary ${
                  isEven ? "right-20" : "left-20"
                } -z-0`}
              />
            </div>

            {/* Text Content */}
            <div className="flex w-full flex-1 items-center justify-center">
              <div className="flex flex-col gap-4 md:gap-5 lg:gap-7 xl:gap-10">
                {/* Shared Heading */}
                <h1 className="text-4xl font-bold whitespace-pre-line text-black lg:text-5xl xl:text-6xl">
                  {MESSAGE_FROM_CEO_SECTION.headingParts.map((part, i) => (
                    <span key={i} className={part.className}>
                      {part.text}
                    </span>
                  ))}
                </h1>

                {/* Message */}
                <p className="lg:text-lg lg:leading-8 xl:leading-10 lg:w-4/5 ">
                  {ceo.message}
                </p>

                {/* Name + Designation */}
                <h1 className="text-2xl font-bold text-black">
                  {ceo.from.name}
                </h1>
                <h1 className="text-primary text-3xl font-extrabold">
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
