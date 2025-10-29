import { ERPSolutions } from "@/components/app/services/erp-implementation/ERPSolutions";
import { ERPChallengesSection } from "@/components/app/services/erp-implementation/ERPChallengesSection";
import { ERPServices } from "@/components/app/services/erp-implementation/ERPServices";
import { ERPServicesTransformation } from "@/components/app/services/erp-implementation/ERPServicesTransformation";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import {
  BANNER_SECTION_ERP,
  QUESTION_SECTION_DATA,
} from "@/data/services/erp-implementation.data";
import { CustomBannerSection } from "@/components/common/CustomBannerSection";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";

export default function Page() {
  return (
    <>
      <CustomBannerSection data={BANNER_SECTION_ERP} />
      <ERPSolutions />
      {/*<ERPChallengesSection />*/}
      <ERPServices />
      <ERPServicesTransformation />
      <ContactSection />
      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_DATA} />
    </>
  );
}
