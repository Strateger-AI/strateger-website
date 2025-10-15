import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust if needed

import { DEVELOPMENT_BLUEPRINT_SECTION } from "@/data/services/deep-learning.data";

export const DevelopmentBlueprintSection = () => {
  const steps = DEVELOPMENT_BLUEPRINT_SECTION.steps;

  return (
    <section className="flex flex-col gap-10 px-5 py-10 md:px-20 lg:flex-row lg:items-center lg:justify-center">
      {/* Left side: Heading */}
      <div className="w-full text-center md:text-left lg:w-2/5">
        <h2 className="text-center text-3xl leading-tight font-bold md:text-6xl lg:text-start">
          {DEVELOPMENT_BLUEPRINT_SECTION.headingParts.map((part, i) => (
            <span key={i} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h2>
      </div>

      {/* Right side: Carousel */}
      <div className="flex flex-col items-center lg:w-2/5">
        {" "}
        <Carousel
          opts={{
            align: "start",
          }}
          style={{ cursor: "grab" }}
          className="w-full max-w-7xl"
        >
          <CarouselContent className="what-matters-carousel rounded-xd -ml-4 py-2 md:-ml-6">
            {steps.map((service, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-2/2 md:pl-6 lg:basis-3/3"
                >
                  <div className="border-primary bg-primary flex h-full flex-col items-center rounded-xl border p-8 text-white shadow-lg transition-shadow hover:shadow-xl">
                    <div className="text-primary mb-5 flex flex-col items-center gap-2">
                      <h3 className="text-2xl font-extrabold text-white">
                        {service.heading}
                      </h3>
                    </div>
                    <p className="">{service.desc}</p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
