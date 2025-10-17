import { HeroSectionAr } from "@/components/app/services/ar-vr-development/HeroSectionAr";
// import { CompanyReviewsSection } from "@/components/app/services/game-development/CompanyReviewsSection";
import { ArDevServicesSection } from "@/components/app/services/ar-vr-development/ARDevServicesSection";
import { CTABusinessSection } from "@/components/app/services/ar-vr-development/CTABusinessSection";
import {
  CTA_BUSINESS_SECTION_AR,
  CTA_SECTION_DATA,
  QUESTION_SECTION_AR_DATA,
} from "@/data/services/ar-vr.data";
import { SolutionARDev } from "@/components/app/services/ar-vr-development/SolutionARDev";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";

export default function Page() {
  return (
    <>
      <HeroSectionAr />
      {/*<CompanyReviewsSection />*/}
      <ArDevServicesSection />
      <CTABusinessSection data={CTA_BUSINESS_SECTION_AR} />
      <SolutionARDev />
      <ContactSection />
      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_AR_DATA} />
      <CTASectionWithLogo data={CTA_SECTION_DATA} />
    </>
  );
}
