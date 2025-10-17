import { BannerSection } from "@/components/app/industries/e-com/BannerSection";
import { EComServices } from "@/components/app/industries/e-com/EcomServices";
import { CTASectionWithImage } from "@/components/common/CTASectionWithImage";
import { CTA_ECOM_SECTION } from "@/data/industries/ecom.data";
import { TrustedSection } from "@/components/app/industries/e-com/TrustedSection";

export default function Page() {
  return (
    <>
      <BannerSection />
      <EComServices />
      <CTASectionWithImage data={CTA_ECOM_SECTION} />
      <TrustedSection />
    </>
  );
}
