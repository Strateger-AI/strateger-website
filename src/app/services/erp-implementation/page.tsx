import { BannerSection } from "@/components/app/services/erp-implementation/BannerSection";
import { ERPSolutions } from "@/components/app/services/erp-implementation/ERPSolutions";
import { ERPChallengesSection } from "@/components/app/services/erp-implementation/ERPChallengesSection";
import { ERPServices } from "@/components/app/services/erp-implementation/ERPServices";
import { ERPServicesTransformation } from "@/components/app/services/erp-implementation/ERPServicesTransformation";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { QUESTION_SECTION_DATA } from "@/data/services/erp-implementation.data";

export default function Page() {
  return (
    <>
      <BannerSection />
      <ERPSolutions />
      <ERPChallengesSection />
      <ERPServices />
      <ERPServicesTransformation />
      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_DATA} />
    </>
  );
}
