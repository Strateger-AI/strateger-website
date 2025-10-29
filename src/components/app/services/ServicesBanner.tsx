import { SERVICES_BANNER_SECTION } from "@/data/services/serices.data";

import { ContactUsForm } from "@/components/common/ContactUsForm";

export function ServicesBanner() {
  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center px-5 py-10 pt-30 text-white md:px-10 xl:px-20"
      style={{
        backgroundImage: `url(${SERVICES_BANNER_SECTION.backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="bg-primary absolute inset-0 z-0 opacity-70" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: Text & Points */}
        <div className="flex w-full flex-col gap-10 lg:w-3/5 justify-around  ">
          <h1 className="text-center text-2xl sm:text-3xl leading-snug font-bold whitespace-pre-line md:text-5xl">
            {SERVICES_BANNER_SECTION.heading}
          </h1>

          <ul className="grid list-disc grid-cols-1 gap-6 pl-5 md:grid-cols-2">
            {SERVICES_BANNER_SECTION.points.map((point, i) => (
              <li className={"space-y-2"} key={i}>
                <h2 className=" text-lg md:text-2xl font-extrabold">
                  {point.title}
                </h2>
                <p className=" text-sm  md:text-lg font-medium md:font-bold">
                  {point.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full lg:w-2/5">
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
