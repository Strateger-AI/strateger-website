import { BannerSection } from "@/components/app/contact/BannerSection";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";
import { ConnectWithUs } from "@/components/app/contact/ConnectWithUs";
import { WhereWeLocated } from "@/components/app/contact/WhereWeLocatied";
import { CTASectionWithLogo } from "@/components/app/home/CTASection";
import { CTA_SECTION_DATA } from "@/data/contact/contact.data";

export default function Page() {
  return (
    <>
      <BannerSection />
      <ContactSection />
      <ConnectWithUs />
      <WhereWeLocated />
      <CTASectionWithLogo data={CTA_SECTION_DATA} />
    </>
  );
}
