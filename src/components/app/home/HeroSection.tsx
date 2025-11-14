"use client";

import { heroSection } from "@/data/main.data";

import { useInView } from "react-intersection-observer";
import { CTAButton2 } from "@/components/common/CTAButton2";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const { ref } = useInView({
    threshold: 0.8,
  });
  return (
    <div
      ref={ref}
      className="flex sm:min-h-screen flex-col items-center justify-around gap-10 px-5 text-white md:items-center md:px-20"
      style={{
        backgroundImage:
          // "linear-gradient(to bottom, #153084, #4169E1 , #F8F8FF)",
          "radial-gradient(ellipse 400% 240% at 50% 100%, #F8F8FF, #F8F8FF 10%, 15%, #c7c5fd 16%, #9a67fa99 17%, 21%, #264cab 28%, 35%, #00031d 45%, #00031d)",
      }}
    >
      <div />
      <div
        className={
          "space-y-8 w-full flex items-center justify-center mt-30  flex-col "
        }
      >
        <h1 className="text-4xl text-center  sm:text-5xl font-bold whitespace-pre-line text-white md:text-6xl lg:w-2/3 lg:text-7xl xl:text-8xl">
          {heroSection.heroContent.map((part, index) => (
            <span key={index} className={part.className}>
              {part.text}
            </span>
          ))}
        </h1>

        <div className={"flex flex-col md:flex-row items-center gap-4"}>
          <CTAButton2 href={heroSection.CTABtnLink} label={"Get Started"} />

          {/*<CTAButton3 href={"/"} label={"Explore Our Services"} />*/}
          <Link href={heroSection.secondaryBtnLink}>
            <Button
              size={"lg"}
              className={
                "rounded-full hover:scale-[102%] duration-500 transition-transform bg-secondary cursor-pointer text-xl shadow-xl  font-bold !px-6  !py-6"
              }
            >
              {heroSection.secondaryBtn}
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5  sm:gap-15  py-8">
        {heroSection.achievements.map((award, index) => (
          <div
            key={index}
            className="relative w-36 h-20  hover:scale-120 sm:w-40 sm:h-24 md:w-40 md:h-40  xl:w-45 xl:h-45 transition-transform duration-300     "
          >
            <Image
              src={award.img}
              alt={award.imgAltText || "award-img"}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
