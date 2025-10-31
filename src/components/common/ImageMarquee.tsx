"use client";
import "./ImageMarquee.css";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface ImageMarqueeProps {
  images: string[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}

const speedMap = {
  slow: 40,
  normal: 25,
  fast: 15,
};

export default function ImageMarquee({
  images,
  direction = "left",
  speed = "normal",
}: ImageMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  // Measure total width of one image set
  useEffect(() => {
    if (containerRef.current) {
      const firstHalfWidth = containerRef.current.scrollWidth / 2;
      setDistance(firstHalfWidth);
    }
  }, [images]);

  const animationDuration = speedMap[speed];
  const animationName =
    direction === "right" ? "marquee-dynamic-reverse" : "marquee-dynamic";

  return (
    <div className="relative bg-muted/50 w-full overflow-hidden py-4">
      <div
        ref={containerRef}
        className={clsx("flex w-max gap-30")}
        style={
          {
            animation: `${animationName} ${animationDuration}s linear infinite`,
            "--marquee-distance": `${distance}px`,
          } as React.CSSProperties
        }
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="flex items-center justify-center overflow-hidden rounded-md"
          >
            <Image
              src={src}
              alt={`${src}-${i}`}
              width={250}
              height={1000}
              className="h-25 w-50 object-contain  p-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
