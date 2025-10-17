import {
  PORTFOLIO_SECTION,
  PORTFOLIO_SECTION_PRODUCTION,
} from "@/data/main.data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function PortfolioSection() {
  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <div
        className={
          "flex flex-col items-center gap-2 md:flex-row md:justify-between"
        }
      >
        <h1 className={"text-4xl font-bold md:text-5xl"}>
          Our <span className={"text-primary"}>Portfolio</span>
        </h1>
      </div>
      <h1 className={"text-center text-lg md:text-start"}>
        {PORTFOLIO_SECTION.portfolioHeading}
      </h1>
      <Carousel className=" ">
        <CarouselContent className={""}>
          {PORTFOLIO_SECTION_PRODUCTION.map((product, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3  ">
              <div className="">
                <Card
                  className={
                    "m-0 !border-0 !bg-transparent py-2 !shadow-none sm:py-0"
                  }
                >
                  {" "}
                  <CardContent className="relative flex h-[540px]  group flex-col overflow-hidden !border-0 !p-0 py-2 md:min-h-[650px] md:p-0 ">
                    {" "}
                    {/* Top Half - Image */}{" "}
                    <div className=" overflow-hidden h-3/5 rounded-xl  w-full">
                      {" "}
                      <Image
                        src={product.image}
                        alt="Portfolio image"
                        fill
                        className="h-full !relative  w-full object-cover object-top group-hover:scale-110  transition-transform duration-500 rounded-xl"
                      />{" "}
                    </div>{" "}
                    {/* Bottom Half - Content */}{" "}
                    <div className="group flex  w-full justify-center">
                      {" "}
                      <div
                        className={
                          " absolute top-50 mx-auto flex w-11/12 lg:w-10/12 rounded-xl bg-white pt-10 text-black shadow-xl"
                        }
                      >
                        {" "}
                        <div
                          className={
                            "relative flex h-full w-full flex-col  justify-around md:gap-6 p-5"
                          }
                        >
                          {" "}
                          <div
                            className={
                              "absolute -top-25 h-25 w-25 rounded-full"
                            }
                          >
                            {" "}
                            <Image
                              fill
                              src={product.companyLogo as string}
                              alt={"company-icon "}
                            />{" "}
                          </div>{" "}
                          <div className={"flex flex-col  gap-2"}>
                            {" "}
                            <h1
                              className={
                                "text-primary font-bold text-xl lg:text-2xl"
                              }
                            >
                              {" "}
                              {product.companyName}{" "}
                            </h1>{" "}
                            <p className={" text-lg"}>
                              {" "}
                              {product.description}{" "}
                            </p>{" "}
                          </div>{" "}
                          <div className={"flex flex-col gap-2"}>
                            {" "}
                            <h1
                              className={
                                "text-primary font-semibold md:text-2xl"
                              }
                            >
                              {" "}
                              Platform{" "}
                            </h1>{" "}
                            <h1 className={"text-lg"}>
                              {" "}
                              {product.platform}{" "}
                            </h1>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </CardContent>{" "}
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
