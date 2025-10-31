"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type AlternatingGridProps = {
  items: {
    title: string;
    reason: string;
    // icon: React.ElementType;
    icon: IconType;
  }[];
};

const CustomAlternatingGrid: React.FC<AlternatingGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:px-10 lg:grid-cols-2">
      {items.map((item, i) => {
        const Icon = item.icon;
        const isLeft = i % 2 === 0;

        return (
          <div
            key={i}
            className={cn(
              "group flex h-40",
              isLeft ? "justify-start" : "justify-end",
            )}
          >
            <div
              className={cn(
                "relative flex h-full w-11/12 items-center rounded-xl bg-white p-5 shadow-xl",
                isLeft ? "flex pr-25" : "flex-row-reverse pl-25",
              )}
            >
              <h1
                className={cn(
                  "w-1/2 text-[10px] text-gray-600 md:text-xs  ",
                  isLeft ? "text-right" : "text-left",
                )}
              >
                {item.reason}
              </h1>
              <h1
                className={cn(
                  "w-1/2 text-sm sm:text-lg font-bold",
                  isLeft ? "text-right" : "text-left",
                )}
              >
                {item.title}
              </h1>

              {Icon && (
                <Icon
                  className={cn(
                    "group-hover:bg-primary text-primary absolute rounded-xl bg-white p-3 text-8xl shadow-xl transition-colors duration-300 group-hover:text-white",
                    isLeft ? "-right-10" : "-left-5",
                  )}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomAlternatingGrid;
