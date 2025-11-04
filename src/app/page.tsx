import { HeroSection } from "@/components/app/home/HeroSection";
import { PortfolioSection } from "@/components/app/home/PortfolioSection";
import { TestimonialSection } from "@/components/app/home/TestimonialSection";
import { WhatWeDoSection } from "@/components/app/home/WhatWeDoSection";
import { IndustriesSection } from "@/components/app/home/IndustriesSection";
import { PartnersSection } from "@/components/app/home/PartnersSection";
import { BusinessSection } from "@/components/app/home/BusinessSection";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";
import { CTA_SECTION_DATA, QUESTION_SECTION_DATA } from "@/data/main.data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />

      <PortfolioSection />
      <PartnersSection />

      <TestimonialSection />
      <IndustriesSection />
      <BusinessSection />
      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_DATA} />
      <CTASectionWithLogo data={CTA_SECTION_DATA} />
    </>
  );
}
