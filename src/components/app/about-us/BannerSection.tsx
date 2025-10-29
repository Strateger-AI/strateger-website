import { BANNER_SECTION } from "@/data/about-us/about-us.data";
import { CTAButton2 } from "@/components/common/CTAButton2";
import Image from "next/image";

export function BannerSection() {
  return (
    <div
      className="relative flex pt-30 md:pt-0 sm:min-h-[90vh] flex-col-reverse items-center justify-center md:gap-10 px-5 text-white md:flex-row md:items-center md:justify-around md:pb-10 pb-5 md:px-20"
      style={{
        backgroundImage: `url(${BANNER_SECTION.backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-primary opacity-70" />

      {/* Left Content */}
      <div className="z-10 flex flex-col md:text-start text-center md:items-start gap-5 md:w-1/2">
        <h1 className="text-center md:text-start text-2xl sm:text-3xl font-bold leading-snug whitespace-pre-line md:text-4xl lg:text-5xl">
          {BANNER_SECTION.headingParts.map((part, i) => (
            <span key={i} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h1>

        <CTAButton2
          version={2}
          label={BANNER_SECTION.CTABtnText}
          href={BANNER_SECTION.CTABtnLink}
          className="!text-2xl"
        />
      </div>

      {/* Right Image */}
      <div className="relative z-10 mb-10  w-full max-w-sm md:mb-0 md:w-1/2 lg:max-w-md">
        <Image
          src={BANNER_SECTION.bannerImg} // <-- Make sure this exists in your data
          alt="Banner side"
          width={700}
          height={700}
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
