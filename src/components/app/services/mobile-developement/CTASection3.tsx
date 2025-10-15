import { CTA_SECTION_3 } from "@/data/mobile/mobile-dev.data";
import { CTAButton } from "@/components/common/CtaButton";

export function CTASection3() {
  return (
    <div className="bg-primary g relative mt-20 flex flex-col items-center px-10 py-20 lg:flex-row lg:px-40">
      {/* Text Section */}
      <div className="space-y-8 self-start lg:w-2/3">
        <h1 className="text-start text-3xl font-bold text-white md:text-4xl">
          {CTA_SECTION_3.heading}
        </h1>

        <CTAButton
          className="self-start text-white"
          label={CTA_SECTION_3.CTABtnText}
        />
      </div>

      {/* Image Section (Responsive positioning) */}
      <div className=""></div>
    </div>
  );
}
