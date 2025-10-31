"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn, scrollToId } from "@/lib/utils";
import { CTAButton2 } from "@/components/common/CTAButton2";

type CTABusinessSectionProps = {
  heading: string;
  description?: string;
  CTABtnText: string;
  CTABtnLink?: string;
  bgImg?: string;
  stats?: {
    stat: number;
    desc: string;
    symbol?: string;
  }[];
};

export function CTABusinessSection({
  data,
}: {
  data: CTABusinessSectionProps;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="relative flex max-w-full bg-primary flex-col items-center justify-center space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
        {data.heading}
      </h1>
      {data.bgImg && (
        <Image
          className={"-z-10 !w-screen object-cover object-top"}
          fill
          src={data.bgImg as string}
          alt={"image "}
        />
      )}

      {data.description && (
        <p className="text-center text-black md:text-2xl">{data.description}</p>
      )}

      {data.stats && (
        <div
          className={cn(
            "z-10 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2",
            data.stats.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
          )}
        >
          {data.stats.map((stat, index) => (
            <div
              ref={ref}
              key={index}
              className={
                "flex flex-col items-center justify-around gap-2 rounded-2xl border-2 border-white px-4 py-5 text-white shadow-md"
              }
            >
              <span className="text-4xl font-bold">
                {inView ? (
                  <CountUp start={0} end={stat.stat} duration={5} />
                ) : (
                  0
                )}
                {stat.symbol && <span>{stat.symbol}</span>}
              </span>

              <span className="font-medium">{stat.desc}</span>
            </div>
          ))}
        </div>
      )}
      {data.CTABtnLink ? (
        <CTAButton2
          label={data.CTABtnText}
          version={2}
          href={data.CTABtnLink as string}
        />
      ) : (
        <CTAButton2
          label={data.CTABtnText}
          version={2}
          onClick={() => {
            scrollToId();
          }}
          // href={data.CTABtnLink as string}
        />
      )}
    </div>
  );
}
