"use client";
import CustomAlternatingGrid from "@/components/common/CustomAlternateGrid";
import { WHY_CHOOSE_STRATEGER_SECTION } from "@/data/services/game-dev.data";

export function WhyChoose() {
  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className="font-bold text-center  leading-normal text-2xl sm:text-3xl md:text-start md:text-5xl">
        {WHY_CHOOSE_STRATEGER_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className={"text-center"}>{WHY_CHOOSE_STRATEGER_SECTION.desc}</p>
      <CustomAlternatingGrid items={WHY_CHOOSE_STRATEGER_SECTION.reasons} />
    </div>
  );
}
