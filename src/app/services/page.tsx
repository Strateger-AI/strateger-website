import { ServicesBanner } from "@/components/app/services/ServicesBanner";
import ServiceSection from "@/components/app/services/ServicesSection";
import { ServicesCtaSection } from "@/components/app/services/ServicesCtaSection";
import { ServicesAchievementSection } from "@/components/app/services/ServicesAchievementSection";

export default function Page() {
  return (
    <>
      <ServicesBanner />
      <ServiceSection />
      <ServicesCtaSection />
      <ServicesAchievementSection />
    </>
  );
}
