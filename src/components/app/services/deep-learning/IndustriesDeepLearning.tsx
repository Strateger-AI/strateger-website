import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { INDUSTRIES_DEEP_LEARNING_DATA } from "@/data/services/deep-learning.data";

export function IndustriesDeepLearning() {
  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h2 className="text-center text-3xl leading-normal font-bold md:text-5xl">
        {INDUSTRIES_DEEP_LEARNING_DATA.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h2>

      <Carousel className="w-full max-w-full">
        <CarouselContent className={""}>
          {INDUSTRIES_DEEP_LEARNING_DATA.industries.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <Card className="m-0 !border-none !bg-transparent p-0 !shadow-none">
                <CardContent className="group  relative flex min-h-[550px] flex-col overflow-hidden rounded-xl">
                  {/* Image wrapper */}
                  <div className="relative flex-[0.9] group-hover:scale-110 duration-300 transition-transform items-center justify-center">
                    <Image
                      src={data.img || "/img.webp"}
                      alt="Industry-Image"
                      fill
                      objectFit="cover"
                      className="h-full w-auto rounded-lg object-contain"
                    />
                  </div>

                  {/* Text wrapper */}
                  <div className="flex flex-[0.1] items-center justify-center">
                    <p className="text-primary text-center text-2xl font-bold">
                      {data.title}
                    </p>
                  </div>
                  <div
                    className={
                      "transform-transition bg-primary flex items-start justify-center flex-col md:text- absolute top-0 left-0 h-full w-full space-y-5 p-10 text-white opacity-0 duration-500 group-hover:opacity-100"
                    }
                  >
                    <h1 className={"text-2xl font-extrabold"}>{data.title}</h1>
                    <p className={"text-xl"}>{data.description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
