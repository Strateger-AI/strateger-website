"use client";
import Image from "next/image";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { CTAButton2 } from "@/components/common/CTAButton2";
import { HEALTHCARE_HERO_SECTION } from "@/data/industries/health.data";
import { ECOMMERCE_HERO_SECTION } from "@/data/industries/ecom.data";

export function BannerSection() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div
      className={
        "mt-20 lg:mt-0 flex min-h-screen flex-col items-center justify-center px-5 py-10 md:mt-10 md:px-20 md:py-20 lg:gap-8"
      }
    >
      <div
        className={
          "flex w-full flex-col items-center justify-around gap-4 lg:flex-row lg:gap-0"
        }
      >
        <div
          className={
            "flex w-full flex-col items-center space-y-4 lg:w-2/5 lg:space-y-8"
          }
        >
          <h1 className="text-center text-3xl leading-snug md:text-start md:text-5xl">
            {HEALTHCARE_HERO_SECTION.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p className={"text-center md:text-start md:text-lg"}>
            {HEALTHCARE_HERO_SECTION.content}
          </p>

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
          <CTAButton2
            href={HEALTHCARE_HERO_SECTION.CTABtnLink}
            className={"self-start"}
            label={HEALTHCARE_HERO_SECTION.CTAButton}
          />
        </div>
        <div className="w-full max-w-md lg:w-1/2 lg:max-w-2/5">
          <Image
            src={HEALTHCARE_HERO_SECTION.bannerImg}
            height={200}
            width={500}
            alt="hero-section-img"
            className="o h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
