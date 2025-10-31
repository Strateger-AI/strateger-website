import { HealthCareServices } from "@/components/app/industries/health/HealthCareServices";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";
import {
  CTA_BUSINESS_SECTION_AR,
  HEALTHCARE_CTA_SECTION,
  HEALTHCARE_FAQ_SECTION,
  HEALTHCARE_HERO_SECTION,
} from "@/data/industries/health.data";
import { WhyHealthCareProfessionals } from "@/components/app/industries/health/WhyHealthCareProfessionals";
import { HealthCareTechnology } from "@/components/app/industries/health/HealthCareTechnology";
import { CTABusinessSection } from "@/components/app/services/ar-vr-development/CTABusinessSection";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { CustomBannerSectionWithStats } from "@/components/common/CustomBannerSectionWithStats";

export default function Page() {
  return (
    <>
      <CustomBannerSectionWithStats data={HEALTHCARE_HERO_SECTION} />
      <HealthCareServices />
      <CTASectionWithLogo data={HEALTHCARE_CTA_SECTION} />
      <WhyHealthCareProfessionals />
      <HealthCareTechnology />
      <CTABusinessSection data={CTA_BUSINESS_SECTION_AR} />
      <ContactSection />
      <QuestionSection QUESTION_SECTION_DATA={HEALTHCARE_FAQ_SECTION} />
    </>
  );
}
