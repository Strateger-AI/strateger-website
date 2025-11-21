// "use client";
// import { useState, useEffect } from "react";
//
// import Container from "@/components/common/Container";
// import GradientTextHeading from "@/components/common/GradientTextHeading";
// import { PORTFOLIO_CATEGORY_SECTION } from "@/data/main.data";
// import {
//   Carousel,
//   type CarouselApi,
//   CarouselContent,
// } from "@/components/ui/carousel";
// import { useIsMobile } from "@/hooks/use-mobile";
//
// export function PortfolioCategoriesSection() {
//   const [api, setApi] = useState<CarouselApi>();
//   const [current, setCurrent] = useState(0);
//   const isMobile = useIsMobile();
//
//   useEffect(() => {
//     if (!api) return;
//     setCurrent(api.selectedScrollSnap());
//     api.on("select", () => setCurrent(api.selectedScrollSnap()));
//   }, [api]);
//
//   const scrollPrev = () => api?.scrollPrev();
//   const scrollNext = () => api?.scrollNext();
//   const scrollTo = (i: number) => api?.scrollTo(i);
//   return (
//     <Container>
//       <GradientTextHeading
//         headingParts={PORTFOLIO_CATEGORY_SECTION.headingParts}
//       />
//       <Carousel
//         setApi={setApi}
//         className="group h-full w-full overflow-hidden rounded-xl shadow-md"
//         opts={{ loop: true, duration: 30 }}
//         draggable={false}
//       >
//         <CarouselContent></CarouselContent>
//       </Carousel>
//     </Container>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";
import Container from "@/components/common/Container";
import GradientTextHeading from "@/components/common/GradientTextHeading";
import Autoplay from "embla-carousel-autoplay";
import { PORTFOLIO_CATEGORY_SECTION } from "@/data/main.data";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdNavigateNext } from "react-icons/md";
import { IoCaretBackOutline } from "react-icons/io5";
import DescriptionText from "@/components/common/DescriptionText";
import { FaArrowRight } from "react-icons/fa6";

export function PortfolioCategoriesSection() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  // Update the current index when the selected item in the carousel changes
  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);
  const plugin = useRef(
    Autoplay({
      delay: 3000, // autoplay every 3 seconds
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  // Methods to control carousel scrolling
  // const scrollPrev = () => api?.scrollPrev();
  // const scrollNext = () => api?.scrollNext();
  const scrollTo = (i: number) => api?.scrollTo(i);

  return (
    <Container className={"space-y-10"}>
      {/* Gradient Text Heading */}
      <GradientTextHeading
        headingParts={PORTFOLIO_CATEGORY_SECTION.headingParts}
      />

      <div className="relative">
        {/* Carousel Component */}
        <Carousel
          plugins={[plugin.current]}
          setApi={setApi}
          opts={{ loop: true, duration: 30 }}
          draggable={false}
        >
          <CarouselContent className="">
            {PORTFOLIO_CATEGORY_SECTION.categories.map((category, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3">
                <Link
                  href={category.link || "#"}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer"
                  className="block h-full w-full"
                >
                  <Card className="m-0  border-2 !bg-transparent py-2 overflow-hidden !shadow-none sm:py-0">
                    <CardContent className="relative flex h-[300px] cursor-pointer group flex-col !border-0 !p-0 py-2 md:min-h-[400px] md:p-0">
                      {/* 🟢 Wrap entire card in Link */}
                      <div
                        className={
                          "absolute w-full h-full bg-radial text-white text-start gap-2 flex p-5 flex-col items-start justify-end to-black/70 z-10"
                        }
                      >
                        <h1 className={"font-extrabold text-3xl  "}>
                          {category.category}
                        </h1>
                        <DescriptionText
                          className={"!text-sm !text-start font-medium "}
                        >
                          {category.description}
                        </DescriptionText>
                        <div className={"w-full  flex justify-end text-right"}>
                          <FaArrowRight
                            className={
                              " text-5xl  group-hover:scale-120 -rotate-45 transition-transform duration-300 text-primary-highlight font-extrabold  "
                            }
                          />
                        </div>
                      </div>

                      {/* Top Half - Image */}
                      <Image
                        src={category.img}
                        alt={"Portfolio-image"}
                        fill
                        className="h-full  !relative w-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
                      />
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className={"flex justify-center items-center text-white"}>
            <div className="my-6 flex justify-center gap-2">
              {PORTFOLIO_CATEGORY_SECTION.categories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`rounded-full  hover:scale-110 transition-all duration-300 cursor-pointer  ${
                    i === current ? "h-4 w-8 bg-black" : "h-4 w-4 bg-gray-500 "
                  }`}
                />
              ))}
            </div>
            {/*<div className={"space-x-5 "}>*/}
            {/*  <button*/}
            {/*    onClick={() => {*/}
            {/*      scrollNext();*/}
            {/*    }}*/}
            {/*    className={*/}
            {/*      "bg-primary-gradient-amber rounded-full group cursor-pointer scale-110 transition-transform duration-500 p-3 text-3xl  "*/}
            {/*    }*/}
            {/*    // size={"lg"}*/}
            {/*  >*/}
            {/*    <IoCaretBackOutline*/}
            {/*      className={*/}
            {/*        " group-hover:scale-125 transition-transform duration-300 "*/}
            {/*      }*/}
            {/*    />*/}
            {/*  </button>*/}
            {/*  <button*/}
            {/*    onClick={() => {*/}
            {/*      scrollPrev();*/}
            {/*    }}*/}
            {/*    className={*/}
            {/*      "bg-primary-gradient-amber rounded-full group cursor-pointer scale-110 transition-transform duration-500 p-3 text-3xl rotate-180 "*/}
            {/*    }*/}
            {/*    // size={"lg"}*/}
            {/*  >*/}
            {/*    <IoCaretBackOutline*/}
            {/*      className={*/}
            {/*        " group-hover:scale-125 transition-transform duration-300 "*/}
            {/*      }*/}
            {/*    />*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>
        </Carousel>
      </div>
    </Container>
  );
}
