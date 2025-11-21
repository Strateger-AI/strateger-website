"use client";
import Image from "next/image";
import { TRANSFORMING_IDEA_SECTION } from "@/data/mobile/mobile-dev.data";
import { CTAButton2 } from "@/components/common/CTAButton2";
import { scrollToId } from "@/lib/utils";

export function TransformingIdeasSection() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-8 px-5 py-10  md:px-20 md:py-10 lg:mt-0">
      <div className="bg flex w-full flex-col-reverse items-center justify-around gap-10 lg:flex-row lg:gap-0">
        {/* Text Section */}
        <div className="flex w-full flex-col items-center justify-around space-y-6 text-center md:items-start lg:w-1/2 lg:space-y-8 lg:text-left">
          <h1 className="text-center leading-snug  text-2xl sm:text-3xl md:text-start md:text-5xl">
            {TRANSFORMING_IDEA_SECTION.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p className="text-center text-base md:text-start md:text-lg">
            {TRANSFORMING_IDEA_SECTION.content}
          </p>

          <CTAButton2
            className=""
            onClick={() => {
              scrollToId();
            }}
            // href={TRANSFORMING_IDEA_SECTION.CTABtnLink}
            label={TRANSFORMING_IDEA_SECTION.CTAButtonText}
          />
        </div>

        {/* Image Section */}
        <div className="w-full  h-[70vh] py-10 max-w-xs md:max-w-sm">
          <Image
            src={TRANSFORMING_IDEA_SECTION.img}
            alt={
              TRANSFORMING_IDEA_SECTION.imgAltText || "Transforming ideas img"
            }
            fill
            className=" !relative w-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
