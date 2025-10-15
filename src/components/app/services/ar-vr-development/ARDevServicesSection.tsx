import { AR_VR_SERVICES_SECTION } from "@/data/services/ar-vr.data";

import TiltCard from "@/components/common/TiltCard";

export function ArDevServicesSection() {
  return (
    <div className="flex w-full flex-col items-center space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className="text-center text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
        {AR_VR_SERVICES_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className={"text-center text-xl"}> {AR_VR_SERVICES_SECTION.desc}</p>

      <div className="lex-1 grid h-full max-w-full grid-cols-1 gap-5 px-10 md:grid-cols-2 lg:grid-cols-3">
        {AR_VR_SERVICES_SECTION.services.map((service, index) => {
          const Icon = service.icon;
          return (
            <TiltCard key={index}>
              <div className="group hover:bg-primary border-primary flex aspect-auto h-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-dashed p-5 shadow-md transition-colors duration-300 hover:border-0 lg:p-10">
                <Icon className="text-primary text-5xl transition-colors duration-300 group-hover:text-white lg:text-6xl" />

                <span className="text-primary text-center text-2xl font-extrabold transition-colors duration-300 group-hover:text-white lg:text-3xl">
                  {service.title}
                </span>

                {/* Show only on hover */}
                <p className="text-center font-medium text-gray-800 transition-all duration-300 group-hover:text-white">
                  {service.desc}
                </p>
              </div>
            </TiltCard>
          );
        })}
      </div>

      {/*<CTAButton className={"self-center"} label={"Get Started Today"} />*/}
    </div>
  );
}
