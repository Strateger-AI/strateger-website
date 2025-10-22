import { EntertainmentServices } from "@/components/app/industries/entertainment/EntertainmentServices";
import { WhyBusinessAreInvesting } from "@/components/app/industries/entertainment/WhyBusinessAreInvesting";
import { SimpleCtaSection } from "@/components/app/services/ServicesCtaSection";
import {
  ENTERTAINMENT_HERO_SECTION,
  ENTERTAINMENT_SIMPLE_CTA_SECTION,
} from "@/data/industries/entertainment.data";
import { CustomBannerSectionWithStats } from "@/components/common/CustomBannerSectionWithStats";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";

export default function Page() {
  return (
    <>
      <CustomBannerSectionWithStats data={ENTERTAINMENT_HERO_SECTION} />
      <EntertainmentServices />
      <SimpleCtaSection data={ENTERTAINMENT_SIMPLE_CTA_SECTION} />
      <WhyBusinessAreInvesting />
      <ContactSection />
    </>
  );
}
