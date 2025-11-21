import React from "react";
import { clsx } from "clsx";

interface HeroTextPart {
  text: string;
  className?: string;
  gradient?: boolean;
  gradientColors?: string; // optional Tailwind gradient class string
}

interface GradientTextProps {
  headingParts: HeroTextPart[];
  className?: string; // for h1 wrapper
}

const GradientTextHeading: React.FC<GradientTextProps> = ({
  headingParts,
  className,
}) => {
  return (
    <h1
      className={clsx(
        className,
        "uppercase  text-3xl sm:text-4xl text-black leading-[1.2] sm:text-5xl  text-center  ",
      )}
    >
      {headingParts.map((part, idx) => {
        const combinedClass = part.gradient
          ? `${part.gradientColors || "bg-gradient-to-r from-primary to-accent"} bg-clip-text  text-transparent ${part.className || ""}`
          : part.className || "";

        return (
          <span
            key={idx}
            className={clsx(combinedClass, "whitespace-pre-line")}
          >
            {part.text}
          </span>
        );
      })}
    </h1>
  );
};

export default GradientTextHeading;
