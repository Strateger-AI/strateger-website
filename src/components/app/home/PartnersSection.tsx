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
    <div className="space-y-5 py-5 md:space-y-10 d:py-10">
      <h1 className="text-center text-3xl font-bold md:text-5xl">
        Trusted <span className={"text-primary"}>Customers</span> and{" "}
        <span className={"text-primary"}>Technologies</span>
      </h1>

      <div className={"space-y-8 py-10 "}>
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
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </div>
  );
}
