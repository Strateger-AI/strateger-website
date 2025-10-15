import { MOBILE_DEV_CTA_DATA } from "@/data/mobile/mobile-dev.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function MobileDevCTASection() {
  return (
    <div className="bg-primary flex min-h-70 flex-col items-center justify-around gap-5 px-10 py-5 lg:flex-row lg:px-40">
      <h1 className="text-center text-3xl leading-snug whitespace-pre-line md:text-start md:text-5xl">
        {MOBILE_DEV_CTA_DATA.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>

      <div
        className={
          "flex flex-col items-center space-y-4 md:items-start lg:w-1/2"
        }
      >
        <p className={"text-white md:text-start lg:text-lg"}>
          {MOBILE_DEV_CTA_DATA.desc}
        </p>
        <div>
          <CTAButton2
            version={2}
            href={MOBILE_DEV_CTA_DATA.CTABtnLink}
            label={MOBILE_DEV_CTA_DATA.CTABtnText}
          />
        </div>
      </div>
    </div>
  );
}
