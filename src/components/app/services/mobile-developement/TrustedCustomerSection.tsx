// import { TRUSTED_CUSTOMERS_SECTION } from "@/data/mobile/mobile-dev.data";
// import Image from "next/image";
//
// export function TrustedCustomerSection() {
//   return (
//     <div className="bg-primary relative mb-20  py-12">
//       <h1 className="text-center font-bold text-white md:text-2xl">
//         {TRUSTED_CUSTOMERS_SECTION.heading}
//       </h1>
//       <div className="bg-white  absolute min-h-24 md:-bottom-20 -bottom-15 lg:-bottom-25 left-1/2 md:h-auto w-4/5 -translate-x-1/2  rounded-2xl shadow-xl px-4 py-6">
//         <div className="flex  justify-around items-center  gap-5">
//           {TRUSTED_CUSTOMERS_SECTION.partners.map((src, index) => (
//             <div
//               key={index}
//               className="relative w-24 h-16  md::w-30 md:h-20 lg:w-40 lg:h-24"
//             >
//               <Image
//                 src={src}
//                 alt={`Showcase image ${index + 1}`}
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { TRUSTED_CUSTOMERS_SECTION } from "@/data/mobile/mobile-dev.data";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

export function TrustedCustomerSection() {
  return (
    <div className="bg-primary relative mb-20 py-12">
      {/* Heading */}
      <h1 className="text-center font-bold pb-6  sm:pb-5 text-white md:text-2xl">
        {TRUSTED_CUSTOMERS_SECTION.heading}
      </h1>

      {/* White box */}
      <div className="bg-white absolute min-h-24 md:-bottom-20 -bottom-15 lg:-bottom-25 left-1/2 md:h-auto w-4/5 -translate-x-1/2 rounded-2xl shadow-xl px-4 py-6">
        {/* 🧠 Carousel (Visible on xs only) */}
        <div className="flex justify-around items-center gap-5 md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {TRUSTED_CUSTOMERS_SECTION.partners.map((src, index) => (
                <CarouselItem key={index} className="basis-1/2">
                  <div className="relative w-full h-20 flex justify-center items-center">
                    <Image
                      src={src}
                      alt={`Customer logo ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/*<CarouselPrevious />*/}
            {/*<CarouselNext />*/}
          </Carousel>
        </div>

        {/* 🧱 Static grid (Visible on md and larger) */}
        <div className="hidden md:flex justify-around items-center gap-5">
          {TRUSTED_CUSTOMERS_SECTION.partners.map((src, index) => (
            <div
              key={index}
              className="relative w-24 h-16 md:w-30 md:h-20 lg:w-40 lg:h-24"
            >
              <Image
                src={src}
                alt={`Customer logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
