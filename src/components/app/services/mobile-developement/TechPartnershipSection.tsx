import { TECH_PARTNERSHIP_SECTION } from "@/data/mobile/mobile-dev.data";
import { Card, CardContent } from "@/components/ui/card";

export function TechPartnershipSection() {
  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className="m-auto mx-20 text-center text-3xl leading-normal font-bold md:text-5xl">
        {TECH_PARTNERSHIP_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className={"text-center"}>{TECH_PARTNERSHIP_SECTION.desc}</p>
      <div className={"flex flex-wrap items-center justify-center gap-4"}>
        {TECH_PARTNERSHIP_SECTION.industries.map((technology, index) => {
          const Icon = technology;
          return (
            <Card className={"hover:shadow-xl"} key={index}>
              <CardContent
                className={"flex min-w-44 items-center justify-center gap-2"}
              >
                <Icon className={"h-24 w-24"} />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
