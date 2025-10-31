import { TESTIMONIALS } from "@/data/main.data";
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
    <div className="space-y-5 px-5 py-5  md:space-y-5 md:px-20 md:py-10">
      <h1 className={"text-center text-2xl sm:text-4xl font-bold md:text-5xl"}>
        Our <span className={"text-primary"}>Clients Testimonials</span>
      </h1>

      <div>
        <Carousel className="w-full  ">
          <CarouselContent className={" pb-4 "}>
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pb-5 md:basis-1/2   lg:basis-1/3"
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
                      <p className={"text-black text-xs md:text-xl"}>
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
  );
}
