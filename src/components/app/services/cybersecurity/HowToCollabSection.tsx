"use client";
import { HOW_TO_COLLAB_DATA } from "@/data/services/cybersecurity.data";
import { Card, CardContent } from "@/components/ui/card";

import { CTAButton2 } from "@/components/common/CTAButton2";
import { scrollToId } from "@/lib/utils";
import Image from "next/image";

export function HowToCollabSection() {
  return (
    <div className=" relative mb-20 flex flex-col items-center gap-2 py-5 md:py-12 lg:min-h-88 lg:pb-40">
      <h1 className="text-center text-3xl z-10 leading-snug whitespace-pre-line text-white md:text-5xl">
        {HOW_TO_COLLAB_DATA.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <CTAButton2
        version={2}
        className={"text-3xl "}
        label={HOW_TO_COLLAB_DATA.CTABtnText}
        onClick={() => {
          scrollToId();
        }}
        // href={HOW_TO_COLLAB_DATA.CTABtnLink}
      />

      {/* Responsive wrapper for model cards */}
      <div
        className={`w-11/12 md:w-4/5 z-10 ${/* Absolute for lg+ only */ ""} h-full lg:absolute lg:-bottom-35 lg:left-1/2 lg:h-62 lg:min-h-40 lg:w-3/5 lg:-translate-x-1/2`}
      >
        <div
          className={`flex h-full w-full flex-col gap-6 md:h-4/5 md:flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-4`}
        >
          {HOW_TO_COLLAB_DATA.models.map((model, i) => {
            const Icon = model.icon;
            return (
              <Card
                key={i}
                className="group h-full w-full !p-0 !shadow-xl lg:w-full"
              >
                <CardContent className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
                  <Icon className="text-primary mb-4 text-6xl transition-transform duration-300 group-hover:scale-110" />
                  <h1 className="text-primary text-xl font-extrabold md:text-2xl">
                    {model.title}
                  </h1>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Image
        src={HOW_TO_COLLAB_DATA.img}
        alt={"cybersecurity-cta.webp"}
        fill
        className={"!absolute -z-10 object-cover object-bottom-right "}
      />
    </div>
  );
}
