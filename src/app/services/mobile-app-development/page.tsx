import { TrustedCustomerSection } from "@/components/app/services/mobile-developement/TrustedCustomerSection";
import { TransformingIdeasSection } from "@/components/app/services/mobile-developement/TransformingIdeasSection";
import { MobileDevServices } from "@/components/app/services/mobile-developement/MobileDevServices";
import { MobileDevCTASection } from "@/components/app/services/mobile-developement/MobileDevCTASection";
import { MobileTechnologiesSection } from "@/components/app/services/mobile-developement/MobileTechnologiesSection";
import { CTASectionWithImage } from "@/components/common/CTASectionWithImage";
import { TechPartnershipSection } from "@/components/app/services/mobile-developement/TechPartnershipSection";
import { WhyTopChoiceSection } from "@/components/app/services/mobile-developement/WhyTopChoiceSection";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { CTA_SECTION_DATA, QUESTION_SECTION_DATA } from "@/data/main.data";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";
import { CTA_SECTION_2, HERO_SECTION } from "@/data/mobile/mobile-dev.data";
import { CustomBannerSection } from "@/components/common/CustomBannerSection";

export default function Page() {
  return (
    <>
      <CustomBannerSection data={HERO_SECTION} />
      <TrustedCustomerSection />
      <TransformingIdeasSection />
      <MobileDevServices />
      <MobileDevCTASection />
      <MobileTechnologiesSection />
      <CTASectionWithImage data={CTA_SECTION_2} />
      {/*<AcheivementSection />*/}
      <TechPartnershipSection />
      <WhyTopChoiceSection />
      <CTASectionWithLogo data={CTA_SECTION_DATA} />
      <ContactSection />
      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_DATA} />
    </>
  );
}
