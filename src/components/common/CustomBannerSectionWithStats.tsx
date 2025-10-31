"use client";
import Image from "next/image";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { CTAButton2 } from "@/components/common/CTAButton2";
import { ECOMMERCE_HERO_SECTION } from "@/data/industries/ecom.data";
import { scrollToId } from "@/lib/utils";

type CustomBannerSectionWithStatsProps = {
  headingParts: { text: string; className: string }[];
  content?: string;
  CTAButton: string;
  stats: {
    stat: number;
    symbol: string;
    desc: string;
  }[];
  CTABtnLink?: string;
  bannerImg: string;
};

export function CustomBannerSectionWithStats({
  data,
}: {
  data: CustomBannerSectionWithStatsProps;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div
      className={
        "mt-20 flex min-h-screen flex-col items-center justify-center px-5 py-10 md:px-20  lg:gap-8"
      }
    >
      <div
        className={
          "flex w-full flex-col-reverse items-center justify-around gap-4 xl:flex-row lg:gap-0"
        }
      >
        <div
          className={
            "flex w-full flex-col items-center space-y-4 xl:w-2/5 xl:space-y-8"
          }
        >
          <h1 className="text-center text-3xl leading-snug md:text-start md:text-5xl">
            {data.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p className={"text-center whitespace-pre-line md:text-start "}>
            {data.content}
          </p>
          <div className=" hidden lg:block   w-full  xl:hidden ">
            <Image
              src={data.bannerImg}
              height={100}
              width={200}
              alt="hero-section-img"
              className=" h-[500px] object-contain w-full   "
            />
          </div>

          <div className="grid  gap-2 grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
            {ECOMMERCE_HERO_SECTION.stats.map((stat, index) => {
              return (
                <div
                  ref={ref}
                  key={index}
                  className="text-primary gap-5 font-bold transition-transform duration-300 hover:scale-110 md:p-0"
                >
                  <div className="bg-primary flex h-full max-w-56 flex-col items-center justify-center rounded-xl p-4 text-white hover:shadow-xl">
                    <span className="text-2xl font-bold lg:text-3xl">
                      {inView ? (
                        <CountUp start={0} end={stat.stat} duration={3} />
                      ) : (
                        0
                      )}
                      <span className={""}>{stat.symbol}</span>
                    </span>

                    <span className="text-center text-xm font-medium">
                      {stat.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {data.CTABtnLink ? (
              <CTAButton2
                href={data.CTABtnLink}
                className={"self-start "}
                label={data.CTAButton}
              />
            ) : (
              <CTAButton2
                onClick={() => {
                  scrollToId();
                }}
                className={"self-start "}
                label={data.CTAButton}
              />
            )}
          </div>
        </div>
        <div className="w-full max-w-md lg:hidden xl:block lg:w-2/5">
          <Image
            src={data.bannerImg}
            height={200}
            width={500}
            alt="hero-section-img"
            className=" h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
