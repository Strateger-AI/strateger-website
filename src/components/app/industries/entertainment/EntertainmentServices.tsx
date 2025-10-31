import { CTAButton2 } from "@/components/common/CTAButton2";
import { ENTERTAINMENT_SERVICES_SECTION } from "@/data/industries/entertainment.data";

export function EntertainmentServices() {
  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className="text-center text-3xl leading-snug whitespace-pre-line md:text-5xl">
        {ENTERTAINMENT_SERVICES_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className={"text-center text-lg"}>
        {" "}
        {ENTERTAINMENT_SERVICES_SECTION.description}
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   xl:px-10">
        {ENTERTAINMENT_SERVICES_SECTION.services.map(
          (service, index: number) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group border-primary hover:bg-primary relative w-full overflow-hidden rounded-xl border-2 border-dashed p-6 transition-colors duration-300 hover:text-white"
              >
                {/* Aspect square container */}
                <div className="absolute inset-0 aspect-square" />

                {/* Content wrapper to center and control layout */}
                <div className="relative z-10 flex h-full flex-col items-center gap-4 md:items-start">
                  <Icon className="text-primary text-6xl group-hover:text-white sm:text-7xl" />
                  <h1 className="text-primary text-center text-xl font-bold group-hover:text-white sm:text-2xl md:text-start">
                    {service.title}
                  </h1>
                  <p className="text-sm sm:text-base">{service.desc}</p>
                </div>
              </div>
            );
          },
        )}
      </div>
      <CTAButton2
        href={ENTERTAINMENT_SERVICES_SECTION.CTABtnLink}
        label={ENTERTAINMENT_SERVICES_SECTION.CTABtnText}
      />
    </div>
  );
}
