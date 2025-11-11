import { ContactUsForm } from "@/components/common/ContactUsForm";
import { INDUSTRIES_BANNER_SECTION } from "@/data/industries/industries.data";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function IndustriesBanner() {
  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center px-5 py-10 md:pt-30 text-white md:px-10 xl:px-20"
      style={{
        backgroundImage: `url(${INDUSTRIES_BANNER_SECTION.backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="bg-primary absolute inset-0 z-0 opacity-70" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-10 lg:flex-row items-center lg:justify-between">
        {/* Left: Text & Points */}
        <div className="flex w-full flex-col gap-5 md:gap-10 items-start lg:w-3/5 justify-around  ">
          <h1 className=" text-2xl sm:text-3xl font-bold whitespace-pre-line md:text-4xl xl:text-6xl">
            {INDUSTRIES_BANNER_SECTION.heading}
          </h1>
          <p className={" text-sm sm:text-lg"}>
            {INDUSTRIES_BANNER_SECTION.description}
          </p>

          <CTAButton2
            href={INDUSTRIES_BANNER_SECTION.CTABtnLink}
            label={INDUSTRIES_BANNER_SECTION.CTABtnText}
          />
        </div>

        {/* Right: Contact Form */}
        <div className=" max-w-2xl lg:w-2/5">
          <div className="flex flex-col gap-6 rounded-xl bg-white p-6 shadow-xl md:p-8">
            <h2 className="text-center text-4xl font-extrabold text-black">
              Book Free <span className="text-primary">Consultation</span>
            </h2>

            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
