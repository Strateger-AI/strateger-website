import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { INDUSTRY_DATA } from "@/data/main.data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function IndustriesSection() {
  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1
        className={
          "text-primary text-center text-2xl sm:text-4xl font-bold md:text-5xl"
        }
      >
        Industries We Transform
      </h1>
      <p className={"text-center md:text-2xl"}>
        Strateger Ai offers a diverse reach by providing industry-specific
        solutions for every client. We work with clients who aim to improve
        customer quality of life while simplifying the daily duties of their
        employees
      </p>
      <Carousel className="w-full max-w-full">
        <CarouselContent className={""}>
          {INDUSTRY_DATA.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <Card className="m-0 !border-none group !bg-transparent p-0 !shadow-none">
                <Link href={data.link}>
                  <CardContent className="group relative flex min-h-[550px] flex-col overflow-hidden rounded-xl">
                    {/* Image wrapper */}
                    <div className="relative flex-[0.8] items-center justify-center">
                      <Image
                        src={data.image}
                        alt="Industry-Image"
                        fill
                        objectFit="cover"
                        className="h-full w-auto rounded-lg group-hover:scale-110 transition-transform duration-500 object-contain"
                      />
                    </div>

                    {/* Text wrapper */}
                    <div className="flex flex-[0.2] items-center justify-center">
                      <p className="text-primary text-center text-xl font-bold">
                        {data.industry}
                      </p>
                    </div>
                    <div
                      className={
                        "transform-transition bg-primary  flex flex-col items-center justify-center absolute top-0 left-0 h-full w-full space-y-5 p-10 text-white opacity-0 duration-500 group-hover:opacity-100"
                      }
                    >
                      <h1 className={"text-3xl font-extrabold"}>
                        {data.industry}
                      </h1>
                      <p className={"font-medium text-xl"}>
                        {data.description}
                      </p>
                    </div>
                  </CardContent>
                </Link>
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
