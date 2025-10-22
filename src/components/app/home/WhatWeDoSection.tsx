"use client";
import { WHAT_WE_DO_DATA } from "@/data/main.data";
import { useEffect, useState } from "react";
import React from "react";
import { cn } from "@/lib/utils";
import { CTAButton2 } from "@/components/common/CTAButton2";

const duration = 3000; // total time per bar
const intervalTime = 50; // how often to update
const increment = 100 / (duration / intervalTime); // how much to increase per tick

export function WhatWeDoSection() {
  const [progressList, setProgressList] = useState<number[]>(
    Array(WHAT_WE_DO_DATA.length).fill(0),
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedService, setSelectedService] = useState(
    WHAT_WE_DO_DATA[currentIndex],
  );

  // Progress Bar Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressList((prev) => {
        const updated = [...prev];
        updated[currentIndex] = Math.min(
          updated[currentIndex] + increment,
          100,
        );
        return updated;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle transition between bars + restart
  useEffect(() => {
    const isLast = currentIndex === WHAT_WE_DO_DATA.length - 1;
    const isCurrentComplete = progressList[currentIndex] >= 100;

    if (isCurrentComplete) {
      const timeout = setTimeout(() => {
        if (isLast) {
          setProgressList(Array(WHAT_WE_DO_DATA.length).fill(0));
          setCurrentIndex(0);
          setSelectedService(WHAT_WE_DO_DATA[0]);
        } else {
          const nextIndex = currentIndex + 1;
          setProgressList((prev) =>
            prev.map((_, i) => (i === nextIndex ? 0 : 0)),
          );
          setCurrentIndex(nextIndex);
          setSelectedService(WHAT_WE_DO_DATA[nextIndex]);
        }
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [progressList, currentIndex]);

  const handleClick = (index: number) => {
    setProgressList(Array(WHAT_WE_DO_DATA.length).fill(0));
    setCurrentIndex(index);
    setSelectedService(WHAT_WE_DO_DATA[index]);
  };

  return (
    <div className="space-y-5  px-5 py-5 md:space-y-10 lg:px-20">
      <h1 className="text-center text-4xl font-bold md:text-7xl">
        {" "}
        <span className={"text-primary"}>What</span> We Do
      </h1>
      <div className="flex h-full flex-col lg:min-h-[60vh]  justify-evenly md:flex-row">
        {/*Left Side*/}
        <div className="flex h-full flex-col md:self-center  items-center justify-around gap-4 md:w-4/12">
          {WHAT_WE_DO_DATA.map((item, index) => {
            const IconComponent = item.serviceIcon;
            return (
              <React.Fragment key={index}>
                <button
                  onClick={() => handleClick(index)}
                  className={cn(
                    "text-md relative hidden h-18 w-full cursor-pointer items-center justify-start gap-2 overflow-hidden rounded-3xl border px-4 text-black shadow-md transition-transform duration-300 hover:scale-105 md:flex",
                    currentIndex === index ? "text-white" : "text-primary",
                  )}
                >
                  <IconComponent
                    className={cn(
                      "text-primary md:text-2xl",
                      currentIndex === index ? "text-white" : "text-primary",
                    )}
                  />
                  <span className="text-md md:sm font-bold">
                    {item.service}
                  </span>
                  <div
                    style={{ width: `${progressList[index]}%` }}
                    className="bg-primary absolute left-0 -z-10 h-full transition-all duration-200"
                  ></div>
                </button>

                <button className="flex h-18 min-h-[250px] w-full cursor-pointer flex-col items-center justify-center space-y-5 overflow-hidden rounded-3xl border p-10 shadow-md transition-transform duration-300 hover:scale-105 md:hidden">
                  <div
                    className={`flex items-center gap-2 ${
                      item.service.length > 5
                        ? "flex-col text-center"
                        : "flex-row"
                    }`}
                  >
                    <IconComponent className="text-primary text-4xl" />
                    <span className="text-md text-primary font-bold">
                      {item.service}
                    </span>
                  </div>

                  <ul className="grid max-w-fit grid-cols-1 gap-2 text-center">
                    {item.mapping.subPoints.map((eachPoint, i) => (
                      <li className="list-disc text-sm font-medium" key={i}>
                        {eachPoint}
                      </li>
                    ))}
                  </ul>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/*Right Side*/}
        <div
          className={
            "hidden max-w-1/2 flex-1 flex-col transition-transform duration-300  items-start   justify-around  h-full rounded-2xl text-sm md:flex md:space-y-4 md:p-5 md:text-xl lg:space-y-8 lg:p-8"
          }
        >
          <h1
            className={
              "text-primary bold font-extrabold md:text-3xl lg:text-4xl"
            }
          >
            {selectedService.service}
          </h1>
          <p className={"text-sm  lg:text-xl leading-normal"}>
            {selectedService.mapping.subDescription}
          </p>
          <div className={"md:px-2"}>
            <div>
              <ul className={"grid grid-cols-1 gap-2"}>
                {selectedService.mapping.subPoints.map((eachPoint, index) => (
                  <li
                    className={
                      "md:text-md text-primary list-disc gap-2 text-sm font-bold lg:text-lg"
                    }
                    key={index}
                  >
                    {eachPoint}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={"flex flex-wrap gap-2"}>
            {selectedService.mapping.technologies.map((tech, index) => {
              const Icon = tech.icon; // lookup
              return (
                // <li key={index} className="font-bold text-white md:text-6xl">
                <Icon
                  key={index}
                  className="lg:w-20 lg:h-20 md:w-15 md:h-15   p-4   rounded-xl hover:scale-110  duration-300  "
                />
                // </li>
              );
            })}
          </div>
          <CTAButton2
            href={selectedService.btnLink}
            label={"Explore More"}
            className={"self-start"}
          />
        </div>
      </div>
    </div>
  );
}
