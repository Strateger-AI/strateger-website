import { EComServices } from "@/components/app/industries/e-com/EcomServices";
import { CTASectionWithImage } from "@/components/common/CTASectionWithImage";
import {
  CTA_ECOM_SECTION,
  ECOMMERCE_HERO_SECTION,
} from "@/data/industries/ecom.data";
import { TrustedSection } from "@/components/app/industries/e-com/TrustedSection";
import { CustomBannerSectionWithStats } from "@/components/common/CustomBannerSectionWithStats";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";

export default function Page() {
  return (
    <>
      <CustomBannerSectionWithStats data={ECOMMERCE_HERO_SECTION} />

      <EComServices />
      <CTASectionWithImage data={CTA_ECOM_SECTION} />
      <TrustedSection />
      <ContactSection />
    </>
  );
}
