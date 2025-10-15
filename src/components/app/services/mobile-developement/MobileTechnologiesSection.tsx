import { MOBILE_TECHNOLOGIES_DATA } from "@/data/mobile/mobile-dev.data";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function MobileTechnologiesSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-5 md:px-20">
      <div className="flex w-full flex-col-reverse items-center justify-around gap-10 pt-10 lg:flex-row lg:gap-0">
        {/* Text Section */}
        <div className="flex w-full flex-col items-center space-y-6 text-center lg:w-1/2 lg:space-y-8 lg:text-left">
          <h1 className="text-center text-3xl leading-snug md:text-start md:text-5xl">
            {MOBILE_TECHNOLOGIES_DATA.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p className="text-base md:text-lg">
            {MOBILE_TECHNOLOGIES_DATA.desc}
          </p>
          <div
            className={
              "mx-auto flex flex-wrap items-center justify-center gap-4"
            }
          >
            {MOBILE_TECHNOLOGIES_DATA.technologies.map((technology, index) => {
              const Icon = technology.icon;
              return (
                <Card className={"hover:shadow-xl"} key={index}>
                  <CardContent
                    className={
                      "flex min-w-44 items-center justify-center gap-2"
                    }
                  >
                    <Icon className={"h-6 w-6"} />
                    <span>{technology.technology}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <span className={"w-fit"}>
            <CTAButton2
              className=""
              href={MOBILE_TECHNOLOGIES_DATA.CTABtnLink}
              label={MOBILE_TECHNOLOGIES_DATA.CTAButtonText}
            />
          </span>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-md lg:w-1/2 lg:max-w-2/5">
          <Image
            src={MOBILE_TECHNOLOGIES_DATA.bannerImg}
            height={200}
            width={500}
            alt="hero-section-img"
            className="o h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
