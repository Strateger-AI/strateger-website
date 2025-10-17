"use client";
import Image from "next/image";
import { CTAButton2 } from "@/components/common/CTAButton2";
import { scrollToId } from "@/lib/utils";

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
    <div className="bg-primary relative mx-auto flex w-full flex-col-reverse items-center justify-between overflow-hidden  px-6 py-10 text-white shadow-xl md:flex-row md:px-10 lg:px-20">
      {/* CTA Text + Button (left on md and up) */}
      <div className="z-10 flex w-full flex-col items-center space-y-6 text-center md:w-1/2 md:items-start md:text-left">
        <h1 className="text-4xl font-bold md:text-4xl lg:text-6xl">
          {data.ctaText}
        </h1>

        {data.desc && <p className={""}>{data.desc}</p>}

        <div>
          <CTAButton2
            version={2}
            className={"text-2xl"}
            // href={data.CTABtnLink}
            onClick={() => {
              scrollToId();
            }}
            label={data.ctaBtnText}
          />
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full md:w-1/2">
        <Image
          src="/strateger_logo.png"
          width={400}
          height={400}
          alt="Strategerai logo"
          className={`absolute top-1/2 left-1/2 mx-auto h-[200px] w-[200px] -translate-x-1/2 -translate-y-10 opacity-50 md:static md:h-[300px] md:w-[300px] md:translate-x-0 md:translate-y-0 md:opacity-100 lg:h-[400px] lg:w-[400px]`}
        />
      </div>
    </div>
  );
}
