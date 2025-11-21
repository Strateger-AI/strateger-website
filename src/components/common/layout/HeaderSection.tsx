"use client";

import Container from "@/components/common/Container";

import GradientTextHeading from "@/components/common/GradientTextHeading";
import { heroHeaderSection } from "@/data/main.data";
import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import { FaPlay } from "react-icons/fa6";
import { useState } from "react";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function HeaderSection() {
  const [isVideoVisible, setVideoVisible] = useState<boolean>(false);
  console.log(isVideoVisible);

  return (
    <div className={"flex flex-col mt-20 sm:mt-0 "}>
      <div className="relative   text-white flex flex-col items-center justify-center  md:py-0 min-h-[60vh] sm:min-h-screen">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          onClick={() => {
            setVideoVisible(false);
          }}
          autoPlay
          muted={!isVideoVisible}
          loop
          src="/dummy/dummy-header-section-video.mp4"
        />

        {/* Black Overlay */}
        {/*<div className="absolute inset-0 bg-black/80 z-10" />*/}
        {!isVideoVisible && (
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/60 z-10" />
        )}

        {/* Foreground Content */}
        {!isVideoVisible && (
          <Container className="relative gap-6  z-20 w-full h-full flex flex-col items-start justify-center ">
            {/*<div className="w-80 h-80 bg-red-500" />*/}
            <GradientTextHeading
              className={
                " uppercase leading-[1.1] text-start text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
              }
              headingParts={heroHeaderSection.headingParts}
            />
            <div className={"flex items-center gap-6 w-full"}>
              <Separator className={"  !w-5 sm:!w-1/5 text-white !h-1"} />
              <h1
                className={
                  "flex-1 font-medium text-xl sm:text-3xl md:text-4xl uppercase"
                }
              >
                {heroHeaderSection.tagline}
              </h1>
            </div>
            <p
              className={
                " text-md hidden sm:block md:text-xl font-medium max-w-2xl  md:max-w-4xl"
              }
            >
              {heroHeaderSection.description}
            </p>
            {/*<Button*/}
            {/*  variant={"outline"}*/}
            {/*  onClick={() => {*/}
            {/*    setVideoVisible(true);*/}
            {/*  }}*/}
            {/*  size={"lg"}*/}
            {/*  className={*/}
            {/*    "rounded-full cursor-pointer flex group transition-transform duration-300 items-center justify-evenly hover:text-white gap-4 !py-4 md:!py-8 text-lg  md:text-2xl  !bg-transparent "*/}
            {/*  }*/}
            {/*>*/}
            {/*  <FaPlay*/}
            {/*    className={*/}
            {/*      "group-hover:scale-125 group-hover:text-primary  transition-transform duration-300 "*/}
            {/*    }*/}
            {/*  />*/}
            {/*  <span>Watch Video</span>*/}
            {/*</Button>*/}
            <div>
              <CTAButton2
                label={"Watch Video "}
                onClick={() => {
                  setVideoVisible(true);
                }}
              />
            </div>
          </Container>
        )}
      </div>
      <p className={" text-lg    p-5  sm:hidden "}>
        {heroHeaderSection.description}
      </p>
    </div>
  );
}
