import { EducationServices } from "@/components/app/industries/education-e-learning/EducationServices";
import {
  EDUCATION_CTA_SECTION,
  QUESTION_SECTION_DATA,
} from "@/data/industries/education.data";
import { SimpleCtaSection } from "@/components/app/services/ServicesCtaSection";
import { EducationSolutions } from "@/components/app/industries/education-e-learning/EducationSolutions";
import { ContactSection } from "@/components/app/services/mobile-developement/ContactSection";
import { QuestionSection } from "@/components/app/home/QuestionSection";
import { CustomBannerSectionWithStats } from "@/components/common/CustomBannerSectionWithStats";
import { BANNER_SECTION } from "@/data/industries/education.data";

export default function Page() {
  return (
    <>
      <CustomBannerSectionWithStats data={BANNER_SECTION} />
      <EducationServices />
      <SimpleCtaSection data={EDUCATION_CTA_SECTION} />
      <EducationSolutions />
      <ContactSection />
      <QuestionSection QUESTION_SECTION_DATA={QUESTION_SECTION_DATA} />
    </>
  );
}
