import { BannerSection } from "@/components/app/services/deep-learning/BannerSection";
import DeepLearningServicesSection from "@/components/app/services/deep-learning/DeepLearningServicesSection";
import { IndustriesDeepLearning } from "@/components/app/services/deep-learning/IndustriesDeepLearning";
import BusinessWeWorkWith from "@/components/app/services/deep-learning/BusinessWeWorkWith";
import { PartnershipSection } from "@/components/app/services/deep-learning/PartnershipSection";
import { DevelopmentBlueprintSection } from "@/components/app/services/deep-learning/DevelopmentBlueprintSection";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { QUESTION_SECTION_DATA } from "@/data/services/deep-learning.data";

export default function Page() {
  return (
    <>
      <BannerSection />
      <DeepLearningServicesSection />
      <IndustriesDeepLearning />
      <DevelopmentBlueprintSection />
      <BusinessWeWorkWith />
      <PartnershipSection />
      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_DATA} />
    </>
  );
}
