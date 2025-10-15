"use client";

import { useState } from "react";
import { BUSINESSES_WE_SERVE } from "@/data/services/deep-learning.data";

const BusinessWeWorkWith = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col items-center justify-center px-5 py-10 md:px-20">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold md:text-5xl">
        {BUSINESSES_WE_SERVE.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h2>

      {/* Description */}
      <p className="mt-4 text-center text-xl text-black">
        {BUSINESSES_WE_SERVE.description}
      </p>

      {/* Main content */}
      <div className="mt-10 flex w-full flex-col gap-6 md:flex-row">
        {/* Titles */}
        <div className="w-full border-r border-gray-200 md:w-2/5">
          <ul className="flex flex-col items-center gap-2 divide-y divide-gray-100">
            {BUSINESSES_WE_SERVE.businesses.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer px-4 py-4 text-center transition-colors duration-300 ${
                  index === activeIndex
                    ? "bg-primary scale-105 rounded-lg px-6 py-3 font-semibold text-white"
                    : "text-black hover:bg-gray-50"
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Description display */}
        <div className="flex flex-1 items-center justify-start px-4">
          <p className="max-w-3xl text-lg leading-relaxed">
            {BUSINESSES_WE_SERVE.businesses[activeIndex]?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessWeWorkWith;
