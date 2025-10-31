import { ERP_SERVICES_SECTION } from "@/data/services/erp-implementation.data";

import { cn } from "@/lib/utils";

export function ERPServices() {
  return (
    <div className="flex w-full flex-col items-center space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className="text-center text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
        {ERP_SERVICES_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className={"text-center text-sm sm:text-xl"}>
        {" "}
        {ERP_SERVICES_SECTION.description}
      </p>
      <div className="flex flex-col rounded-xl bg-white p-4 md:p-8 shadow-xl">
        {ERP_SERVICES_SECTION.factors.map((fact, i) => {
          const Icon = fact.icon;
          return (
            <div key={i}>
              <div
                className={cn(
                  "flex flex-col sm:flex-row gap-5 sm:gap-0  sm:items-center py-8",
                  i !== ERP_SERVICES_SECTION.factors.length - 1 &&
                    "border-b border-gray-200",
                )}
              >
                <Icon className={"text-primary w-1/5 text-5xl"} />

                <div className={"flex flex-1 flex-col gap-3"}>
                  <h1 className={"text-primary text-2xl font-extrabold"}>
                    {fact.title}
                  </h1>
                  <p>{fact.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
