import { BannerSection } from "@/components/app/contact/BannerSection";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";

import { CTASectionWithLogo } from "@/components/app/home/CTASection";
import { CTA_SECTION_DATA } from "@/data/contact/contact.data";
import { ContactWithUs } from "@/components/app/contact/ContactWithUs";

export default function Page() {
  return (
    <>
      <BannerSection />
      <ContactSection />

      <ContactWithUs />
      <CTASectionWithLogo data={CTA_SECTION_DATA} />
    </>
  );
}
