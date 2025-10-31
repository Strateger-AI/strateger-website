import { RealStateServices } from "@/components/app/industries/real-estate/RealStateServices";
import { WhyChooseUs } from "@/components/app/industries/real-estate/WhyChooseUs";
import { CTASectionWithImage } from "@/components/common/CTASectionWithImage";
import {
  CTA_SECTION_REALSTATE,
  REAL_ESTATE_HERO_SECTION,
} from "@/data/industries/realstate.data";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";
import { CustomBannerSectionWithStats } from "@/components/common/CustomBannerSectionWithStats";

export default function Page() {
  return (
    <>
      <CustomBannerSectionWithStats data={REAL_ESTATE_HERO_SECTION} />

      <RealStateServices />
      <CTASectionWithImage data={CTA_SECTION_REALSTATE} />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
