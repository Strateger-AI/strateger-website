import TermsAndConditionsComponent from "@/components/app/terms&condition/Terms&Condition";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";
import { CTA_SECTION_DATA } from "@/data/terms&condition/terms&condition.data";

export default function Home() {
  return (
    <>
      <TermsAndConditionsComponent />
      <CTASectionWithLogo data={CTA_SECTION_DATA} />
    </>
  );
}
