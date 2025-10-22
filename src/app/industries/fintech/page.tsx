import { FintechServices } from "@/components/app/industries/fintech/FintechServices";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";
import {
  CTA_SECTION_FINTECH,
  FINTECH_CTA_SECTION,
  FINTECH_HERO_SECTION,
} from "@/data/industries/fintech.data";
import { AppWeDeliver } from "@/components/app/industries/fintech/AppWeDeliver";
import { CTASectionWithImage } from "@/components/common/CTASectionWithImage";
import { CustomBannerSectionWithStats } from "@/components/common/CustomBannerSectionWithStats";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";

export default function Page() {
  return (
    <>
      <CustomBannerSectionWithStats data={FINTECH_HERO_SECTION} />
      <FintechServices />
      <CTASectionWithLogo data={FINTECH_CTA_SECTION} />
      <AppWeDeliver />
      <ContactSection />
      <CTASectionWithImage data={CTA_SECTION_FINTECH} />
    </>
  );
}
