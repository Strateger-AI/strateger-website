import Image from "next/image";
import { BANNER_SECTION } from "@/data/services/game-dev.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function BannerSection() {
  return (
    <div className="mt-15 flex flex-col items-center justify-center px-5 py-10 md:px-20 md:py-20 lg:gap-8">
      <div className="flex w-full flex-col items-center justify-around gap-10 lg:flex-row lg:gap-20">
        {/* Text Section */}
        <div className="flex w-full flex-col items-center gap-4 md:items-start lg:w-1/2 lg:gap-6">
          <h1 className="text-center text-3xl leading-snug md:text-start md:text-5xl">
            {BANNER_SECTION.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p className="text-center md:text-start md:text-lg">
            {BANNER_SECTION.content}
          </p>

          <CTAButton2
            href={BANNER_SECTION.CTaBtnLink}
            label={BANNER_SECTION.CTABtnText}
          />
        </div>

        {/* Image Section */}
        <div className="w-full max-w-md lg:w-1/2 lg:max-w-lg">
          <Image
            src="/mobile-app-UI.jpg"
            width={500}
            height={600}
            alt="hero-section-img"
            className="!md:h-[700px] h-[300px] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
