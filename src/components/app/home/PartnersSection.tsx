import { PARTNERS_DATA } from "@/data/main.data";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/marquee";
import Image from "next/image";
import React from "react";

export function PartnersSection() {
  return (
    <div className="flex flex-col gap-8 md:gap-15  py-5 md:py-10   ">
      <h1 className="text-center text-xl sm:text-3xl font-extrabold md:text-5xl">
        Trusted <span className={"text-primary"}>Customers</span> and{" "}
        <span className={"text-primary"}>Technologies</span>
      </h1>

      <div className={" flex flex-col  sm:gap-4  md:gap-12    "}>
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent pauseOnHover={false} direction="left">
            {PARTNERS_DATA.customers.map((customer, index) => (
              <MarqueeItem key={index}>
                <Image
                  src={customer.src}
                  alt={customer.name}
                  width={180}
                  height={180}
                  className={" p-2 sm:p-0 "}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent pauseOnHover={false} direction="right">
            {PARTNERS_DATA.technologies.map((technology, index) => (
              <MarqueeItem key={index}>
                <Image
                  src={technology.src}
                  alt={technology.name}
                  width={180}
                  height={180}
                  className={" p-2 sm:p-0 "}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </div>
  );
}
