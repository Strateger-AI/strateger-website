import { BANNER_SECTION } from "@/data/contact/contact.data";
import Image from "next/image";

export function BannerSection() {
  return (
    //   <div
    //     className="relative flex min-h-[90vh] flex-col items-start justify-center gap-10 px-5 text-white md:px-20"
    //     style={{
    //       backgroundImage: `url(${BANNER_SECTION.bannerImg})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //   >
    //     {/* Overlay */}
    //     <div className="bg-primary absolute inset-0 z-0 h-full w-full opacity-70" />
    //
    //     {/* Content */}
    //     <div className="relative z-10 flex flex-col items-start justify-center gap-10">
    //       <h1 className="text-center text-2xl md:text-start font-bold sm:text-3xl leading-snug whitespace-pre-line md:text-5xl">
    //         {BANNER_SECTION.headingParts.map((part, i) => (
    //           <span key={i} className={part.className}>
    //             {part.text}{" "}
    //           </span>
    //         ))}
    //       </h1>
    //
    //       {/*<CTAButton2*/}
    //       {/*  label={BANNER_SECTION.CTABtnText}*/}
    //       {/*  className={"!text-3xl"}*/}
    //       {/*  href={BANNER_SECTION.CTABtnLink}*/}
    //       {/*/>*/}
    //     </div>
    //   </div>
    <section
      className="relative flex pt-30 md:pt-0 sm:min-h-[90vh] flex-col-reverse items-center justify-center md:gap-10 px-5 text-white md:flex-row md:items-center md:justify-around md:pb-10 pb-5 md:px-20"
      // style={{
      //   backgroundImage: `url(${BANNER_SECTION.bannerImg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-primary opacity-70" />

      {/* === LEFT CONTENT === */}
      <div className="relative z-10 flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left gap-6">
        <h1 className="text-2xl font-bold leading-snug whitespace-pre-line sm:text-3xl md:text-4xl lg:text-5xl">
          {BANNER_SECTION.headingParts.map((part, i) => (
            <span key={i} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h1>

        {/* Optional CTA */}
        {/* <CTAButton2
          label={BANNER_SECTION.CTABtnText}
          className="!text-2xl"
          href={BANNER_SECTION.CTABtnLink}
        /> */}
      </div>

      {/* === RIGHT IMAGE === */}
      <div className="relative z-10 mb-10 w-full max-w-sm md:mb-0 md:w-1/2 lg:max-w-md">
        <Image
          src={"/strateger-logo.svg"}
          alt="Banner Visual"
          width={700}
          height={700}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
      <Image
        src={BANNER_SECTION.bannerImg}
        alt={"banner-img"}
        fill
        className={"!absolute -z-10 object-cover object-right  "}
      />
    </section>
  );
}
