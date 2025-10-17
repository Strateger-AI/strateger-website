import { BannerSection } from "@/components/app/industries/fintech/BannerSection";
import { FintechServices } from "@/components/app/industries/fintech/FintechServices";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";
import {
  CTA_SECTION_FINTECH,
  FINTECH_CTA_SECTION,
} from "@/data/industries/fintech.data";
import { AppWeDeliver } from "@/components/app/industries/fintech/AppWeDeliver";
import { CTASectionWithImage } from "@/components/common/CTASectionWithImage";

export default function Page() {
  return (
    <>
      <BannerSection />
      <FintechServices />
      <CTASectionWithLogo data={FINTECH_CTA_SECTION} />
      <AppWeDeliver />
      <CTASectionWithImage data={CTA_SECTION_FINTECH} />
    </>
  );
}
