"use client";
import TiltCard from "@/components/common/TiltCard";
import { ERP_SOLUTIONS_SECTION } from "@/data/services/erp-implementation.data";
import { CTAButton2 } from "@/components/common/CTAButton2";
import { scrollToId } from "@/lib/utils";

export const ERPSolutions = () => {
  return (
    <div className="flex w-full flex-col items-center space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className="text-center text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
        {ERP_SOLUTIONS_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className={"text-center text-xl"}>
        {" "}
        {ERP_SOLUTIONS_SECTION.description}
      </p>

      <div className="lex-1 grid h-full max-w-full grid-cols-1 gap-5 xl:px-10 md:grid-cols-2  lg:grid-cols-3 ">
        {ERP_SOLUTIONS_SECTION.solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <TiltCard key={index}>
              <div className="group hover:bg-primary border-primary flex aspect-auto h-full flex-col items-center justify-start py-5  gap-5 rounded-xl border-2 border-dashed p-8 shadow-xl transition-all duration-300 hover:border-0 ">
                <Icon className="text-primary text-5xl transition-colors duration-300 group-hover:text-white lg:text-6xl" />

                <span className="text-primary text-center text-2xl font-extrabold transition-colors duration-300 group-hover:text-white lg:text-2xl">
                  {solution.title}
                </span>

                {/* Show only on hover */}
                <p className="text-center font-medium text-sm md:text-lg text-gray-800 transition-all duration-300 group-hover:text-white">
                  {solution.desc}
                </p>
              </div>
            </TiltCard>
          );
        })}
      </div>

      <CTAButton2
        className={"text-primary self-center"}
        label={ERP_SOLUTIONS_SECTION.CTABtnText}
        onClick={() => {
          scrollToId();
        }}
        // href={ERP_SOLUTIONS_SECTION.CTABtnLink}
      />
    </div>
  );
};
