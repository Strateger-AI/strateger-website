import { BannerSection } from "@/components/app/services/mobile-developement/BannerSection";
import { TrustedCustomerSection } from "@/components/app/services/mobile-developement/TrustedCustomerSection";
import { TransformingIdeasSection } from "@/components/app/services/mobile-developement/TransformingIdeasSection";
import { MobileDevServices } from "@/components/app/services/mobile-developement/MobileDevServices";
import { MobileDevCTASection } from "@/components/app/services/mobile-developement/MobileDevCTASection";
import { MobileTechnologiesSection } from "@/components/app/services/mobile-developement/MobileTechnologiesSection";
import { CTASection2 } from "@/components/app/services/mobile-developement/CTASection2";
import { AcheivementSection } from "@/components/app/services/mobile-developement/AcheivementSection";
import { TechPartnershipSection } from "@/components/app/services/mobile-developement/TechPartnershipSection";
import { WhyTopChoiceSection } from "@/components/app/services/mobile-developement/WhyTopChoiceSection";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { CTA_SECTION_DATA, QUESTION_SECTION_DATA } from "@/data/main.data";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";

export default function Page() {
  return (
    <>
      <BannerSection />
      <TrustedCustomerSection />
      <TransformingIdeasSection />
      <MobileDevServices />
      <MobileDevCTASection />
      <MobileTechnologiesSection />
      <CTASection2 />
      <AcheivementSection />
      <TechPartnershipSection />
      <WhyTopChoiceSection />
      <CTASectionWithLogo data={CTA_SECTION_DATA} />
      <ContactSection />
      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_DATA} />
    </>
  );
}
