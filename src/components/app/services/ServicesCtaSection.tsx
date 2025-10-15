import { CTAButton2 } from "@/components/common/CTAButton2";
import { SERVICES_CTA_SECTION } from "@/data/services/serices.data";

export function ServicesCtaSection() {
  return (
    <div className="bg-primary flex min-h-80 flex-col items-center justify-around gap-4 px-10 py-10 lg:px-40">
      <h1
        className={
          "max-w-4/5 text-center text-3xl font-extrabold whitespace-pre-line text-white md:text-4xl"
        }
      >
        {SERVICES_CTA_SECTION.heading}
      </h1>

      <CTAButton2
        version={2}
        href={SERVICES_CTA_SECTION.CTABtnLink}
        label={SERVICES_CTA_SECTION.CTABtnText}
      />
    </div>
  );
}
