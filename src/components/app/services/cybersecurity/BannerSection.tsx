import Image from "next/image";

import { CYBERSECURITY_BANNER_SECTION } from "@/data/services/cybersecurity.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function BannerSection() {
  return (
    <div
      className={
        "mt-20 flex flex-col items-center justify-center px-5 py-10 md:mt-10 md:px-20 md:py-20 lg:gap-8"
      }
    >
      <div
        className={
          "flex w-full flex-col items-center justify-around gap-4 lg:flex-row lg:gap-0"
        }
      >
        <div
          className={
            "flex w-full flex-col items-center space-y-4 md:items-start lg:w-2/5 lg:space-y-8"
          }
        >
          <h1 className="text-center text-3xl leading-snug md:text-start md:text-4xl lg:text-6xl">
            {CYBERSECURITY_BANNER_SECTION.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p
            className={
              "md:text-md text-center whitespace-pre-line md:text-start"
            }
          >
            {CYBERSECURITY_BANNER_SECTION.content}
          </p>

          <CTAButton2
            href={CYBERSECURITY_BANNER_SECTION.CTABtnLink}
            label={CYBERSECURITY_BANNER_SECTION.CTABtnText}
          />
        </div>
        <div className="w-full max-w-md lg:w-1/2 lg:max-w-2/5">
          <Image
            src={CYBERSECURITY_BANNER_SECTION.img || "/mobile-app-UI.jpg"}
            height={200}
            width={500}
            alt="hero-section-img"
            className="h-4/5 w-full"
          />
        </div>
      </div>
    </div>
  );
}
