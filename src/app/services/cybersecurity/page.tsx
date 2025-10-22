import { CybersecurityServices } from "@/components/app/services/cybersecurity/CybersecurityServices";
import { WhatMattersMostSection } from "@/components/app/services/cybersecurity/WhatMattersMostSection";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";
import { HowToCollabSection } from "@/components/app/services/cybersecurity/HowToCollabSection";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import {
  CYBERSECURITY_BANNER_SECTION,
  QUESTION_SECTION_DATA,
} from "@/data/services/cybersecurity.data";
import { CustomBannerSection } from "@/components/common/CustomBannerSection";

export default function Page() {
  return (
    <>
      <CustomBannerSection data={CYBERSECURITY_BANNER_SECTION} />
      <CybersecurityServices />
      <WhatMattersMostSection />
      <ContactSection />
      <HowToCollabSection />
      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_DATA} />
    </>
  );
}
