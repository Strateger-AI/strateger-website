import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { CustomRating } from "@/components/common/CustomRating";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  achievements,
  SERVICES_ACHIEVEMENT_SECTION_DATA,
} from "@/data/services/serices.data";

export function ServicesAchievementSection() {
  return (
    <div className="space-y-10 px-5 py-10 md:px-20">
      {/* Heading + Description */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h1 className="text-center text-3xl font-bold md:w-2/5 md:text-4xl">
          {SERVICES_ACHIEVEMENT_SECTION_DATA.headingParts.map((part, i) => (
            <span key={i} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h1>
        <p className="text-black md:text-start text-center md:w-3/5 md:text-lg">
          {SERVICES_ACHIEVEMENT_SECTION_DATA.desc}
        </p>
      </div>

      {/* Carousel */}
      <Carousel className="w-full">
        <CarouselContent className={"p-2"}>
          {achievements.map((achievement, i) => (
            <CarouselItem
              key={i}
              className="w-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="relative m-0 overflow-hidden rounded-xl border-0  p-0 shadow-md">
                <CardContent className="relative h-[410px] w-full p-0">
                  {/* ✅ Full-size Image */}
                  <Image
                    src={achievement.img}
                    fill
                    className="h-full w-full  p-5 object-top object-contain"
                    alt="achievement-image"
                  />

                  {/* Overlay with rating and title */}
                  <div className="absolute bottom-0 flex w-full items-center justify-center rounded-t-2xl bg-white py-10">
                    <div className="absolute -top-5 left-1/2 flex -translate-x-1/2 transform items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-xl">
                      <span className="font-medium text-gray-500">
                        {`${achievement.rating}/5.0`}
                      </span>
                      <CustomRating defaultValue={achievement.rating} />
                    </div>
                    <h2 className="text-center text-lg font-bold">
                      {achievement.title}
                    </h2>
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
