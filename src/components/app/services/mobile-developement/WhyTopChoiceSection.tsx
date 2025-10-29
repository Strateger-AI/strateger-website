"use client";
import { WHY_TOP_CHOICE_SECTION } from "@/data/mobile/mobile-dev.data";
import CustomAlternatingGrid from "@/components/common/CustomAlternateGrid";

export function WhyTopChoiceSection() {
  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className=" text-center font-bold  leading-normal text-2xl sm:text-3xl  md:text-5xl">
        {WHY_TOP_CHOICE_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className={"text-center"}>{WHY_TOP_CHOICE_SECTION.desc}</p>
      <CustomAlternatingGrid items={WHY_TOP_CHOICE_SECTION.reasons} />
    </div>
  );
}
