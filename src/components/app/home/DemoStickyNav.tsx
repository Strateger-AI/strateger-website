"use client";

import { X, Menu, ChevronDown } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/data/main.data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";

const DemoStickyNav = () => {
  const [isHamburgerOn, setHambergerOn] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Hero observer: 10% visibility
  const { ref: hero10Ref, inView: hero10InView } = useInView({
    threshold: 0.1,
  });

  // Hero observer: 80% visibility
  const { ref: hero80Ref, inView: hero80InView } = useInView({
    threshold: 1,
  });

  // Lock body scroll when hamburger open
  useEffect(() => {
    document.body.style.overflow = isHamburgerOn ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isHamburgerOn]);

  // Lock body scroll when hamburger or dropdown is open
  useEffect(() => {
    const shouldLock = isHamburgerOn || activeIndex !== null;
    document.body.style.overflow = shouldLock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isHamburgerOn, activeIndex]);

  return (
    <>
      {/* Invisible refs for scroll tracking */}
      <div ref={hero10Ref} className="absolute top-[10vh]" />
      <div ref={hero80Ref} className="absolute top-[90vh]" />

      <div className={cn("flex w-screen items-center justify-center")}>
        <nav
          className={clsx(
            "fixed top-0 z-50 mx-2 flex h-20 w-screen items-center justify-between self-center px-5 text-xl transition-all duration-500 ease-in-out md:my-5 md:rounded-full md:px-10 lg:justify-evenly",

            // ✅ No animation if isHome is true
            !isHome && "bg-primary text-white md:w-9/12",

            // ✅ Animation logic only if isHome is false
            isHome && "transition-all duration-500 ease-in-out",

            // ✅ WIDTH logic when not on Home
            isHome &&
              (hero10InView && hero80InView
                ? "w-screen max-w-none"
                : "md:w-4/5"),

            // ✅ COLOR logic when not on Home
            isHome &&
              (hero10InView && hero80InView
                ? "bg-transparent text-white"
                : hero80InView && !hero10InView
                  ? "text-primary bg-white shadow-md"
                  : !hero80InView && "bg-primary text-white shadow-lg"),
          )}
        >
          {/* Logo */}

          <Link
            href={"/"}
            className={cn(
              "relative h-16 w-16",
              !hero10InView && hero80InView && "bg-primary rounded-full",
            )}
          >
            <Image
              fill
              src="/strateger_logo.png"
              // src="/logo_3.png"
              alt="logo"
              className="object-contain p-2"
            />
          </Link>

          {/* ======= DESKTOP NAV ======= */}
          <div className="relative hidden flex-1    items-center justify-center  gap-4 lg:gap-8 xl:gap-14 md:flex  ">
            {NAV_ITEMS.map((item, index) => {
              let closeTimeout: NodeJS.Timeout;

              const handleMouseEnter = () => {
                clearTimeout(closeTimeout);
                setActiveIndex(index);
              };

              const handleMouseLeave = () => {
                closeTimeout = setTimeout(() => setActiveIndex(null), 100);
              };

              return (
                <div
                  key={index}
                  className="group relative flex text items-center gap-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Trigger */}
                  {/*<div className={""}>*/}
                  <Link
                    href={item.href ?? "#"}
                    className={cn(
                      "  text-[0.8rem] lg:text-[1rem] font-medium transition-colors",
                      "group-hover:text-secondary",
                      activeIndex === index && "text-secondary",
                    )}
                  >
                    {item.title}
                  </Link>

                  {item.categories && (
                    <ChevronDown
                      className={cn(
                        "hover:text-secondary group-hover:text-secondary transition-transform duration-300",
                        activeIndex == index && "rotate-180",
                      )}
                    />
                  )}
                  {/*</div>*/}

                  {/* Hover dropdown */}
                  {/*{item.categories && activeIndex === index && (*/}
                  {/*  <div*/}
                  {/*    className="nav-dropdown animate-fadeIn fixed top-24 left-1/2 z-40 mt-3 flex min-w-4/5 -translate-x-1/2 rounded-xl bg-white shadow-lg"*/}
                  {/*    onMouseEnter={handleMouseEnter}*/}
                  {/*    onMouseLeave={handleMouseLeave}*/}
                  {/*  >*/}
                  {/*    /!* Left column *!/*/}

                  {/*    <div className="bg-primary m-2 w-1/4 rounded-xl px-6 py-8 text-white">*/}
                  {/*      <div className="flex flex-col gap-4">*/}
                  {/*        {item.categories.map((category, idx) => (*/}
                  {/*          <Link*/}
                  {/*            key={idx}*/}
                  {/*            href={category.href ?? "#"}*/}
                  {/*            className="text-base font-medium hover:underline"*/}
                  {/*          >*/}
                  {/*            {category.title}*/}
                  {/*          </Link>*/}
                  {/*        ))}*/}
                  {/*      </div>*/}
                  {/*    </div>*/}

                  {/*    /!* Right column *!/*/}
                  {/*    <div className="flex flex-1 flex-wrap gap-6 p-8">*/}
                  {/*      {item.categories.map((category, idx) => (*/}
                  {/*        <div key={idx} className="min-w-[180px] space-y-5">*/}
                  {/*          <Link*/}
                  {/*            href={category.href as string}*/}
                  {/*            className="text-md py-5 font-semibold text-black hover:underline"*/}
                  {/*          >*/}
                  {/*            {category.title}*/}
                  {/*          </Link>*/}
                  {/*          <div className="flex flex-col gap-2">*/}
                  {/*            {category.subcategories?.map((sub, subIdx) => (*/}
                  {/*              <h1*/}
                  {/*                key={subIdx}*/}
                  {/*                className="text-sm text-gray-700"*/}
                  {/*              >*/}
                  {/*                {sub.title}*/}
                  {/*              </h1>*/}
                  {/*            ))}*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      ))}*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*)}*/}

                  {item.categories && activeIndex === index && (
                    <>
                      {/*{item.title === "Industries" ? (*/}
                      {/*// 🌟 Custom layout for Industries dropdown*/}
                      <div
                        className="fixed top-24 md:left-1/2 z-40 mt-3 bg-white flex md:min-w-4/5 lg:min-w-3/5 md:-translate-x-1/2 gap-4 rounded-xl  p-3 shadow-xl"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="from-primary hidden xl:flex  to-primary   w-[30%] flex-col justify-end rounded-md bg-gradient-to-b px-6 py-8 text-start text-white">
                          <h1 className={"text-4xl font-extrabold"}>
                            {item.title}.
                          </h1>
                          <p className={"text-xl"}>{item.heading}</p>
                        </div>
                        <div className="grid w-full md:grid-row-3  grid-cols-2 ap-4">
                          {item.categories.map((category, idx) => {
                            const Icon = category.icon;
                            return (
                              <Link
                                key={idx}
                                href={category.href ?? "#"}
                                className="group hover:bg-secondary/20 flex flex-col lg:flex-row  md:items-start  lg:items-center gap-4 rounded-md p-4 text-center text-2xl text-black"
                              >
                                <span
                                  className={
                                    "bg-secondary/20 group-hover:bg-primary flex justify-center items-center  rounded-xl p-4 transition-colors duration-300"
                                  }
                                >
                                  <Icon className="text-primary text-2xl group-hover:text-white" />
                                </span>
                                <div className={"flex flex-col gap-1 "}>
                                  <span className="flex text-lg xl:text-lg font-semibold text-start">
                                    {category.title}
                                  </span>
                                  <span className="flex text-sm text-gray-500 text-start">
                                    {category.desc}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                      {/*) : (*/}
                      {/*  // 🌐 Default dropdown layout*/}
                      {/*  <div*/}
                      {/*    className="nav-dropdown fixed top-24 left-1/2 z-40 mt-3 flex min-w-4/5 -translate-x-1/2 rounded-xl bg-white shadow-lg"*/}
                      {/*    onMouseEnter={handleMouseEnter}*/}
                      {/*    onMouseLeave={handleMouseLeave}*/}
                      {/*  >*/}
                      {/*    /!* Left column *!/*/}
                      {/*    <div className="bg-primary m-2 w-1/4 rounded-xl px-6 py-8 text-white">*/}
                      {/*      <div className="flex flex-col gap-4">*/}
                      {/*        {item.categories.map((category, idx) => (*/}
                      {/*          <Link*/}
                      {/*            key={idx}*/}
                      {/*            href={category.href ?? "#"}*/}
                      {/*            className="text-base font-medium hover:underline"*/}
                      {/*          >*/}
                      {/*            {category.title}*/}
                      {/*          </Link>*/}
                      {/*        ))}*/}
                      {/*      </div>*/}
                      {/*    </div>*/}
                      {/*    /!* Right column *!/*/}
                      {/*    <div className="flex flex-1 flex-wrap gap-6 p-8">*/}
                      {/*      {item.categories.map((category, idx) => (*/}
                      {/*        <div*/}
                      {/*          key={idx}*/}
                      {/*          className="min-w-[180px] space-y-5"*/}
                      {/*        >*/}
                      {/*          <Link*/}
                      {/*            href={category.href as string}*/}
                      {/*            className="text-md text-primary py-5 text-2xl font-semibold hover:underline"*/}
                      {/*          >*/}
                      {/*            {category.title}*/}
                      {/*          </Link>*/}
                      {/*          <div className="flex flex-col gap-2">*/}
                      {/*            {category.subcategories?.map(*/}
                      {/*              (sub, subIdx) => (*/}
                      {/*                <h1*/}
                      {/*                  key={subIdx}*/}
                      {/*                  className="text-sm text-gray-700"*/}
                      {/*                >*/}
                      {/*                  {sub.title}*/}
                      {/*                </h1>*/}
                      {/*              ),*/}
                      {/*            )}*/}
                      {/*          </div>*/}
                      {/*        </div>*/}
                      {/*      ))}*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*)}*/}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link href={"/contact"}>
            <Button
              className={cn(
                "hidden transition-colors duration-300 md:flex",

                // Default style
                "text-primary bg-white hover:text-white",

                // When navbar turns white (text-primary + bg-white)
                isHome &&
                  hero80InView &&
                  !hero10InView &&
                  "bg-primary text-white",

                !hero80InView &&
                  !hero10InView &&
                  "bg-white text-primary hover:border-1 hover:border-white",

                // When not home (nav is bg-primary), set button to bg-white text-primary
                !isHome && "text-primary bg-white",

                !isHome &&
                  "bg-white text-primary hover:border-1 hover:border-white",
              )}
            >
              Let’s talk
            </Button>
          </Link>

          {/* Hamburger button */}
          <Button
            onClick={() => setHambergerOn((prev) => !prev)}
            className="md:hidden"
          >
            <Menu />
          </Button>

          {/* ======= MOBILE MENU ======= */}
          <div
            className={clsx(
              "fixed top-0 right-0 left-0 z-50 h-screen w-screen overflow-y-hidden bg-white px-6 py-10 text-black transition-transform duration-300 sm:w-screen lg:hidden",
              isHamburgerOn ? "translate-x-0" : "translate-x-full",
            )}
          >
            <Button
              onClick={() => setHambergerOn(false)}
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6"
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="mt-12 flex flex-col gap-4 px-4 lg:hidden">
              <Accordion type="multiple" className="w-full space-y-2">
                {NAV_ITEMS.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200 pb-2"
                  >
                    {item.categories && item.categories.length > 0 ? (
                      <>
                        <AccordionTrigger>
                          <span className="w-full text-left text-lg font-semibold">
                            {item.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="my-2 flex flex-col space-y-2 pl-4">
                            {item.categories.map((category, idx) => (
                              <Link
                                key={idx}
                                href={category.href ?? "#"}
                                className="text-sm font-medium hover:underline"
                                onClick={() => setHambergerOn(false)}
                              >
                                {category.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </>
                    ) : (
                      <Link
                        href={item.href ?? "#"}
                        className="w-full text-left text-lg font-semibold hover:underline"
                        onClick={() => setHambergerOn(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default DemoStickyNav;
