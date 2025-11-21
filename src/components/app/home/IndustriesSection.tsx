import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { INDUSTRY_SECTION_DATA } from "@/data/main.data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import DescriptionText from "@/components/common/DescriptionText";
import Container from "@/components/common/Container";
import GradientTextHeading from "@/components/common/GradientTextHeading";

export function IndustriesSection() {
  return (
    <div className={"bg-gradient-to-r  from-primary to-accent"}>
      <Container className="space-y-5   md:space-y-10 ">
        <GradientTextHeading
          headingParts={INDUSTRY_SECTION_DATA.headingParts}
        />
        <DescriptionText className={"text-white"}>
          {INDUSTRY_SECTION_DATA.description}
        </DescriptionText>
        <Carousel className="w-full max-w-full ">
          <CarouselContent className={""}>
            {INDUSTRY_SECTION_DATA.industries.map((data, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="m-0 !border-none group !bg-transparent p-0 !shadow-none">
                  <Link target="_blank" href={data.link}>
                    <CardContent className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-xl">
                      {/* Image wrapper */}
                      <div className="relative flex-[0.9] items-center justify-center">
                        <Image
                          src={data.image}
                          alt={data.imgAltText || "Industry-Image"}
                          fill
                          objectFit="cover"
                          className="h-full w-auto rounded-lg group-hover:scale-110 transition-transform duration-500 object-contain"
                        />
                      </div>

                      {/* Text wrapper */}
                      <div className="flex flex-[0.1] items-center justify-center">
                        <p className="text-white text-center text-xl font-bold">
                          {data.industry}
                        </p>
                      </div>
                      <div
                        className={
                          "transform-transition bg-amber-500 flex flex-col items-start justify-center absolute top-0 left-0 h-full w-full space-y-5 p-5 text-white opacity-0 duration-500 group-hover:opacity-100"
                        }
                      >
                        <h1
                          className={
                            "text-3xl text-start text-white font-extrabold"
                          }
                        >
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
      </Container>
    </div>
  );
}
