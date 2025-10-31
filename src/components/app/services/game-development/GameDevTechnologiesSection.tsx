"use client";

import { useState } from "react";
import { GAME_DEV_TECHNOLOGIES } from "@/data/services/game-dev.data";
import Image from "next/image";

export function GameDevTechnologiesCustomTabs() {
  const [active, setActive] = useState<string>(
    GAME_DEV_TECHNOLOGIES.technologies[0].name,
  );

  return (
    <div className="flex flex-col items-center space-y-8 px-5 py-10 md:px-20 lg:px-32">
      {/* Heading */}
      <h1 className="text-center text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
        {GAME_DEV_TECHNOLOGIES.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>

      {/* Description */}
      <p className="max-w-3xl text-center text-base leading-relaxed md:text-xl">
        {GAME_DEV_TECHNOLOGIES.desc}
      </p>

      {/* Tab Triggers */}
      {/*<div className="bg-primary h-1 w-full" />*/}
      <div className="from-primary to-primary/70 border-primary shadow-secondary/50 flex w-full max-w-4xl justify-center rounded-b-full border-t border-b bg-gradient-to-b shadow-2xl">
        {GAME_DEV_TECHNOLOGIES.technologies.map((tech) => {
          const Icon = tech.svg;
          return (
            <button
              key={tech.name}
              onClick={() => setActive(tech.name)}
              className={`px-4 py-2 text-sm transition-all duration-200 md:text-base ${
                active === tech.name
                  ? "text-primary scale-105 border-b-4 border-white font-semibold"
                  : "hover:text-primary text-gray-600"
              }`}
            >
              <Icon
                className={
                  "h-10 w-10 fill-current text-white md:h-20 md:w-20 lg:h-30 lg:w-30"
                }
              />
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {GAME_DEV_TECHNOLOGIES.technologies.map((tech) => {
        const isActive = tech.name === active;
        return (
          <div
            key={tech.name}
            className={`flex w-full max-w-4/5 items-center justify-around transition-all duration-300 ${
              isActive ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center gap-6 lg:flex-row">
              {/* Image */}
              <div className="w-full overflow-hidden rounded-lg lg:w-1/2">
                <div className="relative h-56 w-full md:h-72 lg:h-80">
                  <Image
                    src={tech.img}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Description Text */}
              <div className="w-full space-y-4 lg:w-1/2">
                <h1 className={"text-primary text-4xl font-bold"}>
                  {tech.name}
                </h1>
                <p className="text-base leading-relaxed md:text-lg">
                  {tech.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
