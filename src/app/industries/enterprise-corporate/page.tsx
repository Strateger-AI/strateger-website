import { BannerSection } from "@/components/app/industries/enterprise/BannerSection";
import { EnterpriseService } from "@/components/app/industries/enterprise/EnterpriceService";
import { CTABusinessSection } from "@/components/app/services/ar-vr-development/CTABusinessSection";
import {
  CTA_ENTERPRISE_SECTION,
  ENTERPRISE_APP_FAQ_SECTION,
} from "@/data/industries/enterprise.data";
import { AppWeDevelope } from "@/components/app/industries/enterprise/AppWeDevelope";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";

export default function Page() {
  return (
    <>
      <BannerSection />
      <EnterpriseService />
      <CTABusinessSection data={CTA_ENTERPRISE_SECTION} />
      <AppWeDevelope />
      <ContactSection />
      <QuestionSection QUESTION_SECTION_DATA={ENTERPRISE_APP_FAQ_SECTION} />
    </>
  );
}
