// import { ACHIEVEMENT_SECTION_DATA } from "@/utils/data/mobile/mobile-dev.data";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import { CustomRating } from "@/components/common/CustomRating";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
//
// export function AcheivementSection() {
//   return (
//     <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
//       <div className={"flex w-full items-center justify-center"}>
//         <h1 className="w-2/5 text-5xl font-bold">
//           {ACHIEVEMENT_SECTION_DATA.headingParts.map((part, i) => (
//             <span key={i} className={part.className}>
//               {part.text}{" "}
//             </span>
//           ))}
//         </h1>
//         <h1 className={"flex-1"}>{ACHIEVEMENT_SECTION_DATA.desc}</h1>
//       </div>
//       <Carousel className="">
//         <CarouselContent className={"!shadow-0 !border-0"}>
//           {ACHIEVEMENT_SECTION_DATA.achievements.map((achievement, i) => (
//             <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4">
//               <Card
//                 className={
//                   "relative m-0 overflow-hidden rounded-xl border-0 bg-red-500 py-0 shadow-none"
//                 }
//                 key={i}
//               >
//                 <CardContent className={"h-[400px] w-full"}>
//                   <Image
//                     src={achievement.img}
//                     width={300}
//                     height={300}
//                     className={"position-center h-full w-full"}
//                     alt={"achievement-image"}
//                   />
//                   <div
//                     className={
//                       "absolute bottom-0 flex h-30 w-full items-center justify-center rounded-t-2xl bg-white"
//                     }
//                   >
//                     <div
//                       className={
//                         "absolute -top-5 flex items-center justify-center gap-2 rounded-xl bg-white p-2 px-4 shadow-xl"
//                       }
//                     >
//                       <span
//                         className={"font-medium text-gray-500"}
//                       >{`${achievement.rating}/5.0`}</span>
//                       <CustomRating defaultValue={achievement.rating} />
//                     </div>
//                     <h1 className={"text-lg font-bold"}>{achievement.title}</h1>
//                   </div>
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }
import { ACHIEVEMENT_SECTION_DATA } from "@/data/mobile/mobile-dev.data";
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

export function AcheivementSection() {
  return (
    <div className="space-y-10 px-5 py-10 md:px-20">
      {/* Heading + Description */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold md:w-2/5 md:text-5xl">
          {ACHIEVEMENT_SECTION_DATA.headingParts.map((part, i) => (
            <span key={i} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h1>
        <p className="text-base text-gray-600 md:w-3/5 md:text-lg">
          {ACHIEVEMENT_SECTION_DATA.desc}
        </p>
      </div>

      {/* Carousel */}
      <Carousel className="w-full">
        <CarouselContent className={"p-2"}>
          {ACHIEVEMENT_SECTION_DATA.achievements.map((achievement, i) => (
            <CarouselItem key={i} className="w-full sm:basis-1/2 lg:basis-1/4">
              <Card className="relative m-0 overflow-hidden rounded-xl border-0 bg-red-500 p-0 shadow-md">
                <CardContent className="relative h-[410px] w-full p-0">
                  {/* ✅ Full-size Image */}
                  <Image
                    src={achievement.img}
                    fill
                    className="h-full w-full object-cover object-top"
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
