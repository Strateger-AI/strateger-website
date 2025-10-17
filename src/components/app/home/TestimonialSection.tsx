import { TESTIMONIAL_IMAGES, TESTIMONIALS } from "@/data/main.data";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { CustomRating } from "@/components/common/CustomRating";

export function TestimonialSection() {
  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className={"text-center text-4xl font-bold md:text-5xl"}>
        Our <span className={"text-primary"}>Clients Testimonials</span>
      </h1>
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIAL_IMAGES.map((image, i) => (
            <div key={i} className="relative w-full">
              <Image
                src={"/dummyTm.webp"}
                alt={`Testimonial image`}
                fill
                className="rounded-md object-contain"
              />
            </div>
          ))}
        </div>

        <div>
          <Carousel className="w-full max-w-full">
            <CarouselContent className={""}>
              {TESTIMONIALS.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="py-14 md:basis-1/2   lg:basis-1/3"
                >
                  <Card
                    className={
                      "m-0 h-full !rounded-xl my-3 !p-2 border-2 shadow-xl"
                    }
                  >
                    <CardContent className="relative !rounded-xl   flex h-full flex-col">
                      <div
                        className={
                          "flex h-full w-full flex-col gap-4 !border-none p-6 text-black"
                        }
                      >
                        <div
                          className={
                            "flex items-center justify-between border-b-[1px] pb-2"
                          }
                        >
                          <div className={"space-y-2"}>
                            <h1 className={"text-lg font-bold md:text-2xl"}>
                              {testimonial.name}
                            </h1>
                            {/*<h1*/}
                            {/*  className={*/}
                            {/*    "md:text-md text-primary text-sm font-bold"*/}
                            {/*  }*/}
                            {/*>*/}
                            {/*  {testimonial.designation}*/}
                            {/*</h1>*/}
                          </div>
                          <CustomRating defaultValue={testimonial.rating} />
                        </div>
                        <p className={"text-black md:text-xl"}>
                          {testimonial.testimonial}
                        </p>
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
      </div>
    </div>
  );
}
