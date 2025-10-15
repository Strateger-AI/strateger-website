import { GAME_PLATFORM_SOLUTIONS } from "@/data/services/game-dev.data";
import Image from "next/image";

import { CTAButton2 } from "@/components/common/CTAButton2";

export function GamePlatformSolutionSection() {
  return (
    <div className="bg-muted z-0 flex min-h-[90vh] flex-col items-center justify-center space-y-8 overflow-hidden px-5 py-10 md:px-20 md:pt-20">
      <div
        className={
          "flex h-full flex-col justify-around gap-4 overflow-hidden md:gap-2 lg:flex-row"
        }
      >
        <div
          className={
            "flex h-full flex-col items-center justify-center gap-8 md:px-10 lg:w-4/12 lg:items-start"
          }
        >
          <h1 className="text-center text-3xl leading-snug font-bold md:text-start md:text-5xl">
            {GAME_PLATFORM_SOLUTIONS.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p className={"text-center md:text-start md:text-xl"}>
            {GAME_PLATFORM_SOLUTIONS.desc}
          </p>
          <CTAButton2
            href={GAME_PLATFORM_SOLUTIONS.CTaBtnLink}
            label={GAME_PLATFORM_SOLUTIONS.ctaText}
          />
        </div>

        <div
          className={"flex min-h-max min-w-1/3 justify-center overflow-hidden"}
        >
          <div className={"relative bottom-0 h-full self-end"}>
            <Image
              src={GAME_PLATFORM_SOLUTIONS.img}
              fill
              alt={"game-platform-image"}
              className={"!relative z-10 h-full min-w-[300px] object-cover"}
            />
            <div
              className={
                "bg-primary absolute -bottom-50 min-h-full w-full rounded-xl"
              }
            />
          </div>
        </div>

        <div
          className={
            "flex max-h-full flex-col items-center justify-around gap-4 md:px-10 lg:w-2/5"
          }
        >
          {GAME_PLATFORM_SOLUTIONS.solutions.map((solution, i) => (
            <li key={i} className={"list-disc space-y-4"}>
              <h1
                className={
                  "text-primary md:text-primary text-center text-xl font-bold lg:text-2xl xl:text-3xl"
                }
              >
                {solution.heading}
              </h1>
              <p className={"text-center text-sm md:text-start"}>
                {solution.desc}
              </p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
