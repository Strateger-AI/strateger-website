"use client";
import React, { useState } from "react";
import Image from "next/image";

// Import your JSON data
// import { blogs as BLOG_SECTION_DATA } from "../../../data/blog/blogs.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { BLOG_SECTION_DATA } from "@/data/blog/blog.data";

// Extract categories from your blog data

const categories = Array.from(
  new Set([
    "All",
    "General",
    "App Development",
    "Ecommerce",
    "Game Development",
    "News",
    ...BLOG_SECTION_DATA.map((blog) => blog.type).filter(
      (t) => t && t !== "All",
    ),
  ]),
);

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
        <div className="flex items-center self-end gap-2">
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

      {/* Blog Cards */}
      <div className="flex gap-4 flex-wrap my-8">
        {filteredBlogs.map(({ bannerImg, title, blogCardDesc, date }, idx) => (
          <Link key={idx} className={"group"} href={`/blog/${slugify(title)}`}>
            <Card className={"p-0 "}>
              <CardContent className="flex flex-col w-[450px]  overflow-hidden rounded-lg border  bg- shadow-md transition-shadow hover:shadow-xl">
                {/* Blog Image */}
                <div className="relative aspect-video  w-full">
                  <Image
                    src={bannerImg || "/images/placeholder.jpg"}
                    alt={title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px)  100vw, (max-width: 1200px) 33vw, 300px"
                  />
                </div>

                {/* Blog Info */}
                <div className="flex flex-1 gap-2 flex-col px-5 py-3">
                  <h3 className="text-primary text-xl font-extrabold ">
                    {title}
                  </h3>
                  <p className=" flex-1 ">{blogCardDesc || ""}</p>
                  <p className="text-primary text-sm font-medium">
                    {date || ""}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
