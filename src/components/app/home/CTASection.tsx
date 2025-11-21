"use client";
import Image from "next/image";
import { CTAButton2 } from "@/components/common/CTAButton2";
import { scrollToId } from "@/lib/utils";
import React from "react";

type CTASectionWithLogoProps = {
  ctaText: string;
  desc?: string;
  CTABtnLink?: string;
  ctaBtnText: string;
};

export function CTASectionWithLogo({
  data,
}: {
  data: CTASectionWithLogoProps;
}) {
  return (
    <div className="bg-primary relative  rounded-xl m-20 flex flex-col-reverse items-center justify-around overflow-hidden  px-6 py-15 text-white shadow-xl md:flex-row md:px-10 lg:px-20">
      {/* CTA Text + Button (left on md and up) */}
      <div className="z-10 flex w-full flex-col  items-center space-y-6 text-center md:w-1/2 md:items-start md:text-left">
        <h1 className="text-4xl font-bold md:text-4xl lg:text-6xl">
          {data.ctaText}
        </h1>

        {data.desc && <p className={""}>{data.desc}</p>}

        <div>
          {data.CTABtnLink ? (
            <CTAButton2
              label={data.ctaBtnText}
              version={2}
              href={data.CTABtnLink as string}
            />
          ) : (
            <CTAButton2
              label={data.ctaBtnText}
              version={2}
              onClick={() => {
                scrollToId();
              }}
              // href={data.CTABtnLink as string}
            />
          )}
        </div>
      </div>

      <Image
        src={"/blogs/cta-bg.webp"}
        alt={"cta-bg"}
        fill
        className={" !absolute "}
      />

      {/* Image */}
      <div className="relative  w-full md:w-1/3">
        <Image
          src="/strateger_logo.png"
          width={500}
          height={400}
          alt="Strategerai logo"
          className={`absolute top-1/2 left-1/2 mx-auto h-[200px] w-[200px] -translate-x-1/2 -translate-y-10 opacity-30 md:static md:h-[250px] md:w-[250px] md:translate-x-0 md:translate-y-0 md:opacity-100 lg:h-[400px] lg:w-[400px]`}
        />
      </div>
    </div>
  );
}
