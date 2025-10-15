import { BANNER_SECTION } from "@/data/about-us/about-us.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function BannerSection() {
  return (
    <div
      className="flex min-h-screen flex-col items-start justify-center gap-10 px-5 text-white md:items-start md:px-20"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to bottom, #153084, #4169E1 , #F8F8FF)",
      // }}
    >
      <h1 className="sm :text-3xl text-4xl font-bold whitespace-pre-line text-white md:text-6xl xl:text-8xl">
        {BANNER_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>

      <CTAButton2
        label={BANNER_SECTION.CTABtnText}
        href={BANNER_SECTION.CTABtnLink}
        className={"!text-3xl"}
      />
    </div>
  );
}
