"use client";

import { Star } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

type RatingStarsProps = {
  max?: number;
  defaultValue?: number; // can be float like 3.5
  className?: string;
};

export function CustomRating({
  max = 5,
  defaultValue = 0,
  className,
}: RatingStarsProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      {Array.from({ length: max }, (_, i) => {
        const value = i + 1;
        const fillPercentage =
          defaultValue >= value
            ? 100
            : defaultValue > value - 1
              ? (defaultValue - (value - 1)) * 100
              : 0;

        return (
          <div key={value} className="relative">
            {/* Empty star */}
            <Star className="h-5 w-5 text-gray-300" strokeWidth={1} />

            {/* Filled star (clipped by percentage) */}
            <Star
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
              }}
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
              strokeWidth={1}
            />
          </div>
        );
      })}
    </div>
  );
}
