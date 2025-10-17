import Image from "next/image";
import { CTAButton2 } from "@/components/common/CTAButton2";
import { BANNER_SECTION } from "@/data/industries/education.data";

export function BannerSection() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center gap-8  px-5 py-10 md:px-20 md:py-20 lg:mt-30">
      <div className="bg flex w-full flex-col-reverse items-center justify-around gap-10 lg:flex-row lg:gap-0">
        {/* Text Section */}
        <div className="flex w-full flex-col items-center justify-around space-y-6 text-center md:items-start lg:w-1/2 lg:space-y-8 lg:text-left">
          <h1 className="text-center text-3xl whitespace-pre-line leading-snug md:text-start md:text-5xl">
            {BANNER_SECTION.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p className="text-center whitespace-pre-line text-base md:text-start md:text-lg">
            {BANNER_SECTION.content}
          </p>

          <CTAButton2
            className=""
            href={BANNER_SECTION.CTABtnLink}
            label={BANNER_SECTION.CTAButtonText}
          />
        </div>

        {/* Image Section */}
        <div className="w-full max-w-xs md:max-w-sm">
          <Image
            src={BANNER_SECTION.img}
            alt="Transforming ideas"
            width={600}
            height={400}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
