"use client";
import { BUSINESS_SECTION_DATA } from "@/data/main.data";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { CTAButton2 } from "@/components/common/CTAButton2";
import GradientTextHeading from "@/components/common/GradientTextHeading";
import Container from "@/components/common/Container";

export function BusinessSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Container className="flex flex-col items-center justify-center space-y-8">
      <GradientTextHeading headingParts={BUSINESS_SECTION_DATA.headingParts} />
      {/*<DescriptionText>{BUSINESS_SECTION_DATA.description}</DescriptionText>*/}

      <div className="grid gap-2 md:gap-4 px-4 grid-cols-2 lg:grid-cols-4 w-full">
        {BUSINESS_SECTION_DATA.stats.map((stat, index) => {
          // const Icon = stat.icon;

          return (
            <div
              ref={ref}
              key={index}
              className="hover:scale-110 items-center  duration-500 bg-gradient-to-r from-primary via-accent to-amber-500 bg-clip-text  text-transparent    "
            >
              <div className="start flex h-full items-center text-center flex-col justify-start">
                <span className=" text-5xl md:text-7xl font-extrabold  ">
                  {inView ? (
                    <CountUp start={0} end={stat.stat} duration={3} />
                  ) : (
                    0
                  )}
                  <span className={"max-w-1/3"}>{stat.type}</span>
                </span>

                <span className="font-medium text-xs sm:text-sm md:text-lg text-black">
                  {stat.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <CTAButton2
        href={BUSINESS_SECTION_DATA.CTABtnLink}
        label={BUSINESS_SECTION_DATA.CTABtnText}
      />
    </Container>
  );
}
