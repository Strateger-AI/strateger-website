import DeepLearningServicesSection from "@/components/app/services/deep-learning/DeepLearningServicesSection";
import { IndustriesDeepLearning } from "@/components/app/services/deep-learning/IndustriesDeepLearning";
import BusinessWeWorkWith from "@/components/app/services/deep-learning/BusinessWeWorkWith";
import { PartnershipSection } from "@/components/app/services/deep-learning/PartnershipSection";
import { DevelopmentBlueprintSection } from "@/components/app/services/deep-learning/DevelopmentBlueprintSection";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import {
  DEEP_LEARNING_BANNER_SECTION,
  QUESTION_SECTION_DATA,
} from "@/data/services/deep-learning.data";
import { CustomBannerSection } from "@/components/common/CustomBannerSection";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";

export default function Page() {
  return (
    <>
      <CustomBannerSection data={DEEP_LEARNING_BANNER_SECTION} />
      <DeepLearningServicesSection />
      <IndustriesDeepLearning />
      <DevelopmentBlueprintSection />
      <BusinessWeWorkWith />
      <PartnershipSection />
      <ContactSection />
      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_DATA} />
    </>
  );
}
