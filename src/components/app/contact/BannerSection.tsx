import { BANNER_SECTION } from "@/data/contact/contact.data";

export function BannerSection() {
  return (
    <div
      className="relative flex min-h-[90vh] flex-col items-start justify-center gap-10 px-5 text-white md:px-20"
      style={{
        backgroundImage: `url(${BANNER_SECTION.bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="bg-primary absolute inset-0 z-0 h-full w-full opacity-70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center gap-10">
        <h1 className="text-center text-2xl font-bold sm:text-3xl leading-snug whitespace-pre-line md:text-5xl">
          {BANNER_SECTION.headingParts.map((part, i) => (
            <span key={i} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h1>

        {/*<CTAButton2*/}
        {/*  label={BANNER_SECTION.CTABtnText}*/}
        {/*  className={"!text-3xl"}*/}
        {/*  href={BANNER_SECTION.CTABtnLink}*/}
        {/*/>*/}
      </div>
    </div>
  );
}
