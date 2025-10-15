"use client";
import { BUSINESS_SECTION_DATA } from "@/data/main.data";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function BusinessSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="flex flex-col items-center justify-center space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className={"text-primary text-center text-4xl font-bold md:text-5xl"}>
        {BUSINESS_SECTION_DATA.heading}
      </h1>
      <p className={"text-center text-black md:text-2xl"}>
        {BUSINESS_SECTION_DATA.description}
      </p>

      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {BUSINESS_SECTION_DATA.stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              ref={ref}
              key={index}
              className="from-primary via-primary to-primary/90 flex items-center gap-2 rounded-2xl bg-gradient-to-r px-4 py-5 text-white shadow-md"
            >
              <div>
                <Icon className="h-10 w-10" />
              </div>
              <div className="start flex h-full max-w-56 flex-col justify-center">
                <span className="text-2xl font-bold">
                  {inView ? (
                    <CountUp start={0} end={stat.stat} duration={3} />
                  ) : (
                    0
                  )}
                  <span>{stat.type}</span>
                </span>

                <span className="font-medium">{stat.description}</span>
              </div>
            </div>
          );
        })}
      </div>

      <CTAButton2
        href={BUSINESS_SECTION_DATA.CTABtnLink}
        label={BUSINESS_SECTION_DATA.CTABtnText}
      />
    </div>
  );
}
