// import { PortfolioSection } from "@/components/app/home/PortfolioSection";
import { TestimonialSection } from "@/components/app/home/TestimonialSection";
import { IndustriesSection } from "@/components/app/home/IndustriesSection";
import { PartnersSection } from "@/components/app/home/PartnersSection";
import { BusinessSection } from "@/components/app/home/BusinessSection";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";
import { CTA_SECTION_DATA, QUESTION_SECTION_DATA } from "@/data/main.data";
import { HeaderSection } from "@/components/common/layout/HeaderSection";
import { HomePageServicesSection } from "@/components/app/home/HomePageServicesSection";
import { PortfolioCategoriesSection } from "@/components/app/home/PortfolioCategoriesSection";

export default function Home() {
  return (
    <>
      {/*<HeroSection />*/}
      <HeaderSection />
      {/*<WhatWeDoSection />*/}
      <HomePageServicesSection />
      {/*<PortfolioSection />*/}
      <PortfolioCategoriesSection />
      <IndustriesSection />
      <BusinessSection />
      <PartnersSection />
      <TestimonialSection />

      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_DATA} />
      <CTASectionWithLogo data={CTA_SECTION_DATA} />
    </>
  );
}
