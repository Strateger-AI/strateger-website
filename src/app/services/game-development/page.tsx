import { BannerSection } from "@/components/app/services/game-development/BannerSection";
import { CompanyReviewsSection } from "@/components/app/services/game-development/CompanyReviewsSection";
import { TopTierSection } from "@/components/app/services/game-development/TopTierSection";
import { GameDevelopmentServices } from "@/components/app/services/game-development/GameDevelopmentServices";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";
import { GamePlatformSolutionSection } from "@/components/app/services/game-development/GamePlatformSolutionSection";
import { GameDevTechnologiesCustomTabs } from "@/components/app/services/game-development/GameDevTechnologiesSection";
import { GameDevProcessSection } from "@/components/app/services/game-development/GameDevProcess";
import { WhyChoose } from "@/components/app/services/game-development/WhyChooseStrategerSection";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";
import {
  CTA_SECTION_DATA_GAME,
  QUESTION_SECTION_DATA,
} from "@/data/services/game-dev.data";

export default function Page() {
  return (
    <>
      <BannerSection />
      <CompanyReviewsSection />
      <TopTierSection />
      <GameDevelopmentServices />
      <GamePlatformSolutionSection />
      <GameDevTechnologiesCustomTabs />
      <GameDevProcessSection />
      <WhyChoose />
      <CTASectionWithLogo data={CTA_SECTION_DATA_GAME} />
      <ContactSection />
      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_DATA} />
    </>
  );
}
