import Image from "next/image";
import { WHAT_WE_DO_SECTION } from "@/data/about-us/about-us.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function WhatWeDo() {
  return (
    <div
      className={
        "flex flex-col items-center justify-center px-5 py-10 md:px-20 md:py-20 lg:gap-8"
      }
    >
      <div
        className={
          "flex w-full flex-col items-center justify-around gap-4 lg:flex-row lg:gap-0"
        }
      >
        <div
          className={
            "flex w-full flex-col items-start space-y-4 lg:w-2/5 lg:space-y-8"
          }
        >
          <h1 className="text-center text-3xl leading-snug md:text-start md:text-7xl">
            {WHAT_WE_DO_SECTION.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p
            className={
              "md:text-md text-center whitespace-pre-line md:text-start"
            }
          >
            {WHAT_WE_DO_SECTION.desc}
          </p>

          <CTAButton2
            label={WHAT_WE_DO_SECTION.CTABtnText}
            href={WHAT_WE_DO_SECTION.CTABtnLink}
          />
        </div>
        <div className="w-full max-w-md lg:w-1/2 lg:max-w-2/5">
          <Image
            src={WHAT_WE_DO_SECTION.img || "/mobile-app-UI.jpg"}
            height={200}
            width={500}
            alt="hero-section-img"
            className="h-4/5 w-full"
          />
        </div>
      </div>
    </div>
  );
}
