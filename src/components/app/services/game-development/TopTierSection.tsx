import Image from "next/image";
import { TOP_TIER_SECTION } from "@/data/services/game-dev.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function TopTierSection() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-5 py-10 md:px-20 md:py-20">
      <div className="flex w-full flex-col-reverse items-center justify-around gap-10 pt-10 lg:flex-row lg:gap-0">
        {/* Image Section */}
        <div className="w-full max-w-md lg:w-1/2 lg:max-w-2/5">
          <Image
            src="/mobile-app-UI.jpg"
            height={200}
            width={500}
            alt="hero-section-img"
            className="o h-full w-full"
          />
        </div>
        {/* Text Section */}
        <div className="flex w-full flex-col items-center space-y-6 text-center md:items-start lg:w-1/2 lg:space-y-8 lg:text-left">
          <h1 className="text-center text-3xl leading-snug font-bold md:text-start md:text-5xl">
            {TOP_TIER_SECTION.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p className="text-base whitespace-pre-line md:text-lg">
            {TOP_TIER_SECTION.desc}
          </p>
          <div>
            <CTAButton2
              className=""
              href={TOP_TIER_SECTION.CTABtnLink}
              label={TOP_TIER_SECTION.CTABtnText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
