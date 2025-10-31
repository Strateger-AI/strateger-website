import { IndustriesBanner } from "@/components/app/industries/IndustiresBanner";
import { IndustriesWeServe } from "@/components/app/industries/IndustriesWeServe";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";
import { INDUSTRY_CTA_SECTION } from "@/data/industries/industries.data";

export default function Page() {
  return (
    <>
      <IndustriesBanner />
      <IndustriesWeServe />
      <CTASectionWithLogo data={INDUSTRY_CTA_SECTION} />
    </>
  );
}
