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
    <div className="flex flex-col gap-15  py-5   ">
      <h1 className="text-center text-2xl sm:text-3xl font-extrabold md:text-5xl">
        Trusted <span className={"text-primary"}>Customers</span> and{" "}
        <span className={"text-primary"}>Technologies</span>
      </h1>

      <div className={" flex flex-col   gap-6 md:gap-12    "}>
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
