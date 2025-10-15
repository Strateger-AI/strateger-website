import { CTAButton } from "@/components/common/CtaButton";
import { CTA_SECTION } from "@/data/services/game-dev.data";

export function CTASection() {
  return (
    <div
      className={
        "bg-primary flex flex-col items-center justify-center gap-5 px-5 py-10 md:gap-10 md:p-20 md:px-20"
      }
    >
      <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
        {CTA_SECTION.heading}
      </h1>
      <CTAButton className={"text-white"} label={CTA_SECTION.CTABtnText} />
    </div>
  );
}
