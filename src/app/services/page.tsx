import { ServicesBanner } from "@/components/app/services/ServicesBanner";
import ServiceSection from "@/components/app/services/ServicesSection";

import { ServicesAchievementSection } from "@/components/app/services/ServicesAchievementSection";
import { SERVICES_CTA_SECTION } from "@/data/services/serices.data";
import { SimpleCtaSection } from "@/components/app/services/ServicesCtaSection";

export default function Page() {
  return (
    <>
      <ServicesBanner />
      <ServiceSection />
      <SimpleCtaSection data={SERVICES_CTA_SECTION} />
      <ServicesAchievementSection />
    </>
  );
}
