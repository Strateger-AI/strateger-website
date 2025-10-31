import { EnterpriseService } from "@/components/app/industries/enterprise/EnterpriceService";
import { CTABusinessSection } from "@/components/app/services/ar-vr-development/CTABusinessSection";
import {
  CTA_ENTERPRISE_SECTION,
  ENTERPRISE_APP_FAQ_SECTION,
  ENTERPRISE_HERO_SECTION,
} from "@/data/industries/enterprise.data";
import { AppWeDevelope } from "@/components/app/industries/enterprise/AppWeDevelope";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";
import { CustomBannerSectionWithStats } from "@/components/common/CustomBannerSectionWithStats";

export default function Page() {
  return (
    <>
      <CustomBannerSectionWithStats data={ENTERPRISE_HERO_SECTION} />
      <EnterpriseService />
      <CTABusinessSection data={CTA_ENTERPRISE_SECTION} />
      <AppWeDevelope />
      <ContactSection />
      <QuestionSection QUESTION_SECTION_DATA={ENTERPRISE_APP_FAQ_SECTION} />
    </>
  );
}
