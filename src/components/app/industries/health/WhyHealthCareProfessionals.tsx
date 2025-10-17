import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HEALTHCARE_PARTNERSHIP_DATA } from "@/data/industries/health.data";

export function WhyHealthCareProfessionals() {
  return (
    <section className="flex flex-col items-center space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      {/* Heading */}
      <h2 className="text-center text-3xl leading-normal font-bold md:text-5xl">
        {HEALTHCARE_PARTNERSHIP_DATA.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h2>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        style={{ cursor: "grab" }}
        className="w-full max-w-7xl"
      >
        <CarouselContent className="what-matters-carousel rounded-xd -ml-4 py-2 md:-ml-6">
          {HEALTHCARE_PARTNERSHIP_DATA.solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3"
              >
                <div className="border-primary flex h-full flex-col items-center rounded-xl border bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                  <div className="text-primary mb-5 flex flex-col items-center gap-2">
                    <Icon className="text-4xl" />
                    <h2 className="text-center text-xl leading-normal font-bold text-black md:text-3xl">
                      {solution.titleParts.map((part, i) => (
                        <span key={i} className={part.className}>
                          {part.text}{" "}
                        </span>
                      ))}
                    </h2>
                  </div>
                  <p className="text-black">{solution.desc}</p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
