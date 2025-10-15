"use client";

import { heroSection } from "@/data/main.data";

import { useInView } from "react-intersection-observer";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function HeroSection() {
  const { ref } = useInView({
    threshold: 0.8,
  });
  return (
    <div
      ref={ref}
      className="flex min-h-screen flex-col items-center justify-center gap-10 px-5 text-white md:items-center md:px-20"
      style={{
        backgroundImage:
          // "linear-gradient(to bottom, #153084, #4169E1 , #F8F8FF)",
          "radial-gradient(ellipse 400% 240% at 50% 100%, #F8F8FF, #F8F8FF 10%, 15%, #c7c5fd 16%, #9a67fa99 17%, 21%, #264cab 28%, 35%, #00031d 45%, #00031d)",
      }}
    >
      <h1
        className={
          "sm :text-3xl text-center text-4xl font-bold whitespace-pre-line text-white md:text-6xl lg:w-2/3 lg:text-8xl"
        }
      >
        {heroSection.heroContent}
      </h1>

      <div>
        <CTAButton2
          href={"/"}
          label={"Get Started Now"}
          className={"self-start"}
        />
      </div>
    </div>
  );
}
