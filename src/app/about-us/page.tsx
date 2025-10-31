import { BannerSection } from "@/components/app/about-us/BannerSection";
import { MessageFromCEOSection } from "@/components/app/about-us/MessageFromCEOSection";
import { WhatWeDo } from "@/components/app/about-us/WhatWeDo";
import { CTABusinessSection } from "@/components/app/services/ar-vr-development/CTABusinessSection";

import {
  CTA_BUSINESS_SECTION_ABOUT_US,
  CTA_SECTION_DATA,
} from "@/data/about-us/about-us.data";
import { WhyStrategerSection } from "@/components/app/about-us/WhyStrategerSection";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";

export default function Page() {
  return (
    <>
      <BannerSection />
      <MessageFromCEOSection />
      <WhatWeDo />
      <CTABusinessSection data={CTA_BUSINESS_SECTION_ABOUT_US} />
      <WhyStrategerSection />
      <CTASectionWithLogo data={CTA_SECTION_DATA} />
    </>
  );
}
