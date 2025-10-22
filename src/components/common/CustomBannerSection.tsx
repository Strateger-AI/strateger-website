"use client";

import Image from "next/image";

import { CTAButton2 } from "@/components/common/CTAButton2";
import { scrollToId } from "@/lib/utils";

type CustomBannerSectionProps = {
  headingParts: { text: string; className: string }[];
  desc?: string;
  CTABtnText: string;
  CTABtnLink?: string;
  bannerImg: string;
};

export function CustomBannerSection({
  data,
}: {
  data: CustomBannerSectionProps;
}) {
  return (
    <div
      className={
        " mt-20  lg:mt-10   min-h-screen flex flex-col items-center justify-center px-5 py-10   md:px-20 md:py-20 lg:gap-8"
      }
    >
      <div
        className={
          "flex w-full flex-col items-center justify-around gap-4 lg:flex-row lg:gap-0"
        }
      >
        <div
          className={
            "flex w-full flex-col items-center md:items-start  justify-start  gap-5 lg:w-2/5 lg:gap-8"
          }
        >
          <h1 className="text-center text-3xl  md:text-start md:text-5xl">
            {data.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          {data.desc && (
            <p
              className={
                "text-center whitespace-pre-line  md:text-start md:text-lg"
              }
            >
              {data.desc}
            </p>
          )}

          <div>
            {data.CTABtnLink ? (
              <CTAButton2
                href={data.CTABtnLink}
                className={"self-start "}
                label={data.CTABtnText}
              />
            ) : (
              <CTAButton2
                onClick={() => {
                  scrollToId();
                }}
                className={"self-start "}
                label={data.CTABtnText}
              />
            )}
          </div>
        </div>
        <div className="w-full max-w-md md:p-10 g:w-2/5 lg:max-w-2/5">
          <Image
            src={data.bannerImg}
            height={200}
            width={500}
            alt="hero-section-img"
            className="o h-full w-full   object-contain"
          />
        </div>
      </div>
    </div>
  );
}
