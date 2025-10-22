"use client";
import { ERP_CHALLENGES_SECTION } from "@/data/services/erp-implementation.data";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { useState } from "react";

export const ERPChallengesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 py-16 md:px-20">
      {/* Heading */}
      <h1 className="text-center text-3xl  font-bold whitespace-pre-line md:text-5xl">
        {ERP_CHALLENGES_SECTION.headingParts.map((part, index) => (
          <span key={index} className={`${part.className} mr-1 inline-block`}>
            {part.text}
          </span>
        ))}
      </h1>

      {/*<p className="mt-4 text-center md:text-lg">*/}
      {/*  {ERP_CHALLENGES_SECTION.description}*/}
      {/*</p>*/}

      <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-around px-5 lg:px-20">
        {/* Left: Description + Bullet List */}
        <div className="flex flex-col gap-6 max-w-3xl w-full">
          {/* Description */}
          <h1 className={"text-4xl font-bold text-primary"}>
            {ERP_CHALLENGES_SECTION.contentHeading}
          </h1>
          <p className="text-center lg:text-left text-base lg:text-lg text-black">
            {ERP_CHALLENGES_SECTION.contentDesc}
          </p>

          {/* Bullet List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4  lg:text-base list-disc list-outside text-black">
            {ERP_CHALLENGES_SECTION.challenges.map((challenge, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cursor-pointer text-primary font-medium transition-colors duration-200 hover:text-red-600"
              >
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Full-height Icon */}
        <div className="flex justify-center items-center w-full lg:w-1/4">
          <div className="flex h-full w-full justify-center items-center">
            <TbAlertTriangleFilled
              className={`h-full w-full transition-all duration-500 ${
                hoveredIndex !== null ? "text-red-500" : "text-gray-400"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
