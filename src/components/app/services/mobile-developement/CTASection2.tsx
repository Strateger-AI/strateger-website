import { CTA_SECTION_2 } from "@/data/mobile/mobile-dev.data";
import Image from "next/image";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function CTASection2() {
  return (
    <div className="bg-primary relative mt-20 flex flex-col items-center gap-5 px-10 py-20 lg:flex-row lg:px-40">
      {/* Text Section */}
      <div className="flex flex-col items-start space-y-4 lg:w-1/2">
        <h1 className="text-start text-3xl font-bold text-white md:text-4xl">
          {CTA_SECTION_2.heading}
        </h1>
        <p className="lg:text-md text-white">{CTA_SECTION_2.desc}</p>
        <span>
          <CTAButton2
            href={CTA_SECTION_2.CTABtnLink}
            version={2}
            label={CTA_SECTION_2.CTABtnText}
          />
        </span>
      </div>

      {/* Image Section (Responsive positioning) */}
      <div className="relative mt-10 h-[300px] w-full lg:absolute lg:right-0 lg:bottom-0 lg:h-[120%] lg:w-3/5">
        <Image
          src={CTA_SECTION_2.img}
          fill
          className="object-contain"
          alt="cta-img"
        />
      </div>
    </div>
  );
}
