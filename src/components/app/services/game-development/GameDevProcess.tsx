import { GAME_DEV_PROCESS } from "@/data/services/game-dev.data";

import { cn } from "@/lib/utils";
import HorizontalProgressBar from "@/components/app/services/game-development/HorizontalProgressBar";

export function GameDevProcessSection() {
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center space-y-8 px-5 py-10 md:px-20 lg:px-32",
        )}
      >
        {/* Heading */}
        <h1 className="text-center text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
          {GAME_DEV_PROCESS.headingParts.map((part, i) => (
            <span key={i} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h1>
        <p className="text-center text-base whitespace-pre-line md:text-lg">
          {GAME_DEV_PROCESS.desc}
        </p>
        <HorizontalProgressBar />
      </div>
    </>
  );
}
