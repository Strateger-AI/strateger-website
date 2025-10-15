"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

import { WHAT_MATTER_MOST_SECTION } from "@/data/services/cybersecurity.data";

export function WhatMattersMostSection() {
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [itemsPerView, setItemsPerView] = useState(1);
  const services = WHAT_MATTER_MOST_SECTION.services;
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Set itemsPerView based on screen size
  // useEffect(() => {
  //   const updateItemsPerView = () => {
  //     const width = window.innerWidth;
  //     if (width >= 1024) {
  //       setItemsPerView(3);
  //     } else if (width >= 768) {
  //       setItemsPerView(2);
  //     } else {
  //       setItemsPerView(1);
  //     }
  //   };
  //
  //   updateItemsPerView();
  //   window.addEventListener("resize", updateItemsPerView);
  //   return () => window.removeEventListener("resize", updateItemsPerView);
  // }, []);
  //
  // const totalPages = Math.ceil(services.length / itemsPerView);
  //
  // // Track scroll to update current page index
  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) return;
  //
  //   const handleScroll = () => {
  //     const scrollLeft = container.scrollLeft;
  //     const scrollWidth = container.scrollWidth;
  //     const itemWidth = scrollWidth / services.length;
  //     const currentGroup = Math.round(scrollLeft / (itemWidth * itemsPerView));
  //     setSelectedIndex(currentGroup);
  //   };
  //
  //   container.addEventListener("scroll", handleScroll);
  //   return () => container.removeEventListener("scroll", handleScroll);
  // }, [services.length, itemsPerView]);

  return (
    <section className="flex flex-col items-center space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      {/* Heading */}
      <h2 className="text-center text-3xl leading-normal font-bold md:text-5xl">
        {WHAT_MATTER_MOST_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h2>

      {/* Description */}
      <p className="text-center text-lg text-black md:text-xl">
        {WHAT_MATTER_MOST_SECTION.desc}
      </p>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        style={{ cursor: "grab" }}
        className="w-full max-w-7xl"
      >
        <CarouselContent
          ref={containerRef}
          className="what-matters-carousel rounded-xd -ml-4 py-2 md:-ml-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3"
              >
                <div className="border-primary flex h-full flex-col items-center rounded-xl border bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                  <div className="text-primary mb-5 flex flex-col items-center gap-2">
                    <Icon className="text-4xl" />
                    <h3 className="text-center text-2xl font-semibold">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-base">
                    {service.desc}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Pagination Dots (non-clickable) */}
      {/*<div className="mt-6 flex justify-center gap-2">*/}
      {/*  {Array.from({ length: totalPages }).map((_, i) => (*/}
      {/*    <div*/}
      {/*      key={i}*/}
      {/*      className={cn(*/}
      {/*        "h-2 w-2 rounded-full transition-all",*/}
      {/*        selectedIndex === i ? "bg-primary w-4" : "bg-gray-300",*/}
      {/*      )}*/}
      {/*      aria-label={`Slide group ${i + 1}`}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </section>
  );
}
