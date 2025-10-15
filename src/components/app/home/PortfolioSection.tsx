import { CTAButton } from "@/components/common/CtaButton";
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
        <CTAButton className={"text-primary"} label={"View All Projects"} />
      </div>
      <h1 className={"text-center text-lg md:text-start"}>
        {PORTFOLIO_SECTION.portfolioHeading}
      </h1>
      <Carousel className="">
        <CarouselContent className={""}>
          {PORTFOLIO_SECTION_PRODUCTION.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <Card
                  className={
                    "m-0 !border-0 !bg-transparent py-2 !shadow-none sm:py-0"
                  }
                >
                  {" "}
                  <CardContent className="relative flex min-h-[540px] flex-col overflow-hidden !border-0 !p-0 py-2 md:min-h-[600px] md:p-0 lg:min-h-[650px]">
                    {" "}
                    {/* Top Half - Image */}{" "}
                    <div className="relative min-h-1/2 w-full">
                      {" "}
                      <Image
                        src={product.image}
                        alt="Portfolio image"
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover"
                      />{" "}
                    </div>{" "}
                    {/* Bottom Half - Content */}{" "}
                    <div className="group flex h-2/3 w-full justify-center">
                      {" "}
                      <div
                        className={
                          "absolute top-50 mx-auto flex h-3/5 w-10/12 rounded-2xl bg-white pt-10 text-black shadow-xl"
                        }
                      >
                        {" "}
                        <div
                          className={
                            "relative flex h-full w-full flex-col gap-8 px-5 py-5"
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
                          <div className={"space-y-2"}>
                            {" "}
                            <h1
                              className={"text-primary font-bold md:text-3xl"}
                            >
                              {" "}
                              {product.companyName}{" "}
                            </h1>{" "}
                            <p className={"text-gray-700 md:text-xl"}>
                              {" "}
                              {product.description}{" "}
                            </p>{" "}
                          </div>{" "}
                          <div className={"space-y-1"}>
                            {" "}
                            <h1
                              className={
                                "text-primary font-semibold md:text-2xl"
                              }
                            >
                              {" "}
                              Platform{" "}
                            </h1>{" "}
                            <h1
                              className={
                                "font-light text-black capitalize md:text-xl"
                              }
                            >
                              {" "}
                              {product.platform}{" "}
                            </h1>{" "}
                          </div>{" "}
                          <CTAButton
                            label={""}
                            className={
                              "group-hover:text-primary absolute right-5 bottom-5 transition-transform duration-300 group-hover:scale-120"
                            }
                          />{" "}
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
