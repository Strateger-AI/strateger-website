import { BannerSection } from "@/components/app/industries/real-estate/BannerSection";
import { RealStateServices } from "@/components/app/industries/real-estate/RealStateServices";
import { WhyChooseUs } from "@/components/app/industries/real-estate/WhyChooseUs";
import { CTASectionWithImage } from "@/components/common/CTASectionWithImage";
import { CTA_SECTION_REALSTATE } from "@/data/industries/realstate.data";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";

export default function Page() {
  return (
    <>
      <BannerSection />
      <RealStateServices />
      <CTASectionWithImage data={CTA_SECTION_REALSTATE} />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
