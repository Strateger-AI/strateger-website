"use client";
import React, { useState, useRef } from "react";
import { BLOG_SECTION_DATA } from "@/data/blog/blog.data";
import Image from "next/image";

const categories = [
  "All",
  ...Array.from(
    new Set(
      BLOG_SECTION_DATA.map((blog) => blog.type).filter((t) => t !== "All"),
    ),
  ),
];

export function BlogsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredBlogs =
    activeTab === "All"
      ? BLOG_SECTION_DATA
      : BLOG_SECTION_DATA.filter((blog) => blog.type === activeTab);

  // Ref for scroll container for tabs
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Mouse / touch drag handlers for scroll on small tabs container
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };
  const onMouseLeave = () => {
    isDragging.current = false;
  };
  const onMouseUp = () => {
    isDragging.current = false;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 2; //scroll-fast
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  // Same for touch events
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };
  const onTouchEnd = () => {
    isDragging.current = false;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  return (
    <section className="px-5 py-10 pt-20 md:px-20">
      {/* Tabs - Scrollable on small */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        className="scrollbar-hide flex space-x-4 overflow-x-auto border-b border-gray-300 md:hidden"
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`flex-shrink-0 rounded-md px-4 py-2 font-semibold whitespace-nowrap ${
              activeTab === category
                ? "bg-primary text-white"
                : "hover:text-primary text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Tabs - Normal on md+ */}
      <div className="mt-6 hidden w-full justify-center md:flex">
        <div className="flex items-center justify-around rounded-xl bg-white px-6 py-4 shadow-xl lg:w-4/5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`rounded-md px-4 py-2 font-semibold whitespace-nowrap ${
                activeTab === category
                  ? "bg-primary text-white"
                  : "hover:text-primary text-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map(({ img, title, desc, date }, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-xl"
          >
            <div className="relative h-48 w-full">
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-primary mb-3 text-xl font-bold">{title}</h3>
              <p className="mb-6 flex-1 text-gray-700">{desc}</p>
              <p className="text-primary text-sm font-medium">{date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
