import { BannerSection } from "@/components/app/industries/entertainment/BannerSection";
import { EntertainmentServices } from "@/components/app/industries/entertainment/EntertainmentServices";
import { WhyBusinessAreInvesting } from "@/components/app/industries/entertainment/WhyBusinessAreInvesting";
import { SimpleCtaSection } from "@/components/app/services/ServicesCtaSection";
import { ENTERTAINMENT_SIMPLE_CTA_SECTION } from "@/data/industries/entertainment.data";

export default function Page() {
  return (
    <>
      <BannerSection />
      <EntertainmentServices />
      <SimpleCtaSection data={ENTERTAINMENT_SIMPLE_CTA_SECTION} />
      <WhyBusinessAreInvesting />
    </>
  );
}
