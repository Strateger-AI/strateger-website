"use client";
import Image from "next/image";
import { TOP_TIER_SECTION } from "@/data/services/game-dev.data";
import { CTAButton2 } from "@/components/common/CTAButton2";
import { scrollToId } from "@/lib/utils";

export function TopTierSection() {
  return (
    <div
      className={
        "  mt-20  flex  flex-col  items-center justify-center px-5 py-10   md:px-20 md:py-20 lg:gap-8"
      }
    >
      <div
        className={
          "flex w-full flex-col-reverse items-center justify-around gap-4 lg:flex-row lg:gap-0"
        }
      >
        <div className="w-full max-w-md g:w-2/5 lg:max-w-2/5">
          <Image
            src={TOP_TIER_SECTION.img}
            height={200}
            width={500}
            alt="hero-section-img"
            className="o h-full w-full   object-contain"
          />
        </div>
        <div
          className={
            "flex w-full flex-col items-center md:items-start  justify-start  gap-5 lg:px-10 lg:w-3/5 lg:gap-8"
          }
        >
          <h1 className="text-center text-3xl  md:text-start md:text-5xl">
            {TOP_TIER_SECTION.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p
            className={
              "text-center whitespace-pre-line md:text-start md:text-lg"
            }
          >
            {TOP_TIER_SECTION.desc}
          </p>

          <div>
            <CTAButton2
              onClick={() => {
                scrollToId();
              }}
              className={"self-start "}
              label={TOP_TIER_SECTION.CTABtnText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
