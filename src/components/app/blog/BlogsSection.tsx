"use client";
import React, { useState } from "react";
import { BLOG_SECTION_DATA } from "@/data/blog/blog.data";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  return (
    <section className="px-5 py-10 pt-20 md:px-20">
      {/* Dropdown - Visible on small screens only */}
      <div className="mb-6 flex flex-col items-center justify-center gap-4 md:hidden">
        <h1 className="text-center text-4xl font-extrabold text-primary">
          {activeTab} Blogs
        </h1>
        <div className="flex items-center self-end  gap-2">
          <span className="text-nowrap text-sm font-medium">Sort By</span>
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
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
