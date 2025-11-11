// "use client";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { BLOG_SECTION_DATA } from "@/data/blog/blog.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

type BlogPageProps = {
  id: number;
  bannerImg: string;
  title: string;
  type: string;
  date: string;
  blogCardDesc: string;
  mainDescription: string;
  contentArray: {
    heading: string;
    description: string;
  }[];
  ctaData?: {
    CTAText: string;
    CTABtnText: string;
    ctaBtnLink: string;
    img: string;
  }[];
  ourServices: {
    heading: string;
    description: string;
  }[];
}[];

export async function BlogPage({ blog }: { blog: BlogPageProps }) {
  const filteredBlogs = BLOG_SECTION_DATA.filter(
    (eachBlog) => eachBlog.title === blog[0].title,
  );

  if (!blog[0]) return null;
  else
    return (
      <div className="flex justify-center md:pt-30 px-10 py-16">
        <div className="w-full max-w-[1000px] space-y-8">
          {/* Banner Image */}
          {blog[0].bannerImg && (
            <div className="w-full flex justify-center">
              <Image
                src={blog[0].bannerImg}
                alt={blog[0].title}
                width={900}
                height={400}
                className="object-contain rounded-lg"
              />
            </div>
          )}

          {/* Title & Main Description */}
          <div className=" space-y-6 md:space-y-12">
            <h1 className=" text-3xl md:text-5xl text-center font-extrabold ">
              {blog[0].title}
            </h1>
            <p className=" text-xl whitespace-pre-line">
              {blog[0].mainDescription}
            </p>
          </div>
          <Separator />

          {/* Content Array */}
          <div className=" space-y-6  md:space-y-12">
            {blog[0].contentArray.map((item, idx) => (
              <div key={idx} className="space-y-6">
                <h2 className="text-3xl font-bold">{item.heading}</h2>
                <p className="text-lg whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Placeholder */}
          {blog[0].ctaData && blog[0].ctaData.length > 0 && (
            <div className="bg-primary relative mx-auto flex w-full  flex-col-reverse items-center justify-between overflow-hidden  px-6 py-15 text-white shadow-xl md:flex-row md:px-10 lg:px-20">
              {/* CTA Text + Button (left on md and up) */}
              <div className="z-10 flex w-full flex-col items-center space-y-6 text-center flex-1 md:items-start md:text-left">
                <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
                  {blog[0].ctaData[0].CTAText}
                </h1>

                <CTAButton2
                  label={blog[0].ctaData[0].CTABtnText}
                  version={2}
                  href={blog[0].ctaData[0].ctaBtnLink}
                />
              </div>

              {/* Image */}
              <div className="relative w-full flex items-center justify-center md:w-1/2">
                <Image
                  src="/strateger_logo.png"
                  width={200}
                  height={200}
                  alt="Strategerai logo"
                  className={`object-contain`}
                />
              </div>
            </div>
          )}

          {/* Our Services / Next blog[0]s */}
          <div className=" space-y-6 md:space-y-12">
            {blog[0].ourServices.map((item, idx) => (
              <div key={idx} className="space-y-6">
                <h2 className="text-3xl font-bold">{item.heading}</h2>
                <p className="text-lg whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/*<div className="space-y-6  ">*/}
          {/*  <h1 className={"font-extrabold text-4xl text-primary text-center"}>*/}
          {/*    Explore More Blogs*/}
          {/*  </h1>*/}
          {/*  {filteredBlogs.map(*/}
          {/*    ({ bannerImg, title, blogCardDesc, date }, idx) => (*/}
          {/*      <Link key={idx} href={`/blog/${slugify(title)}`}>*/}
          {/*        <Card className={"p-0 group"}>*/}
          {/*          <CardContent className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-xl">*/}
          {/*            /!* Blog Image *!/*/}
          {/*            <div className="relative aspect-video  h-58 w-full">*/}
          {/*              <Image*/}
          {/*                src={bannerImg || "/images/placeholder.jpg"}*/}
          {/*                alt={title}*/}
          {/*                fill*/}
          {/*                className="object-cover group-hover:scale-105 transition-transform duration-500"*/}
          {/*                sizes="(max-width: 768px)  100vw, (max-width: 1200px) 33vw, 300px"*/}
          {/*              />*/}
          {/*            </div>*/}

          {/*            /!* Blog Info *!/*/}
          {/*            <div className="flex flex-1 gap-2 flex-col px-5 py-3">*/}
          {/*              <h3 className="text-primary text-xl font-extrabold ">*/}
          {/*                {title}*/}
          {/*              </h3>*/}
          {/*              <p className=" flex-1 ">{blogCardDesc || ""}</p>*/}
          {/*              <p className="text-primary text-sm font-medium">*/}
          {/*                {date || ""}*/}
          {/*              </p>*/}
          {/*            </div>*/}
          {/*          </CardContent>*/}
          {/*        </Card>*/}
          {/*      </Link>*/}
          {/*    ),*/}
          {/*  )}*/}
          {/*</div>*/}
        </div>
      </div>
    );
}
