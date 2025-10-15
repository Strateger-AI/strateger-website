import { WHY_STRATEGERAI_SECTION } from "@/data/about-us/about-us.data";
import Image from "next/image";

export function WhyStrategerSection() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10 md:px-20 md:py-20 lg:h-screen">
      <div className={"flex h-full flex-col lg:flex-row xl:w-4/5"}>
        {/*Left-side*/}
        <div className={"flex h-full flex-col lg:w-2/5"}>
          {/*First colm*/}
          <div className={"space-y-2"}>
            <h1 className="text-center text-xl leading-snug md:text-start md:text-3xl">
              {WHY_STRATEGERAI_SECTION.headingParts.map((part, i) => (
                <span key={i} className={part.className}>
                  {part.text}{" "}
                </span>
              ))}
            </h1>
            <h1 className="text-center text-2xl leading-snug md:text-start md:text-4xl">
              {WHY_STRATEGERAI_SECTION.descriptionParts.map((part, i) => (
                <span key={i} className={part.className}>
                  {part.text}{" "}
                </span>
              ))}
            </h1>
          </div>
          {/*Second clm Image*/}
          <div
            className={
              "flex min-h-[600px] w-full flex-1 justify-around lg:p-10"
            }
          >
            <div className={"relative h-[400px] w-2/5 self-start lg:h-4/5"}>
              <Image
                src={"/mobile-app-UI.jpg"}
                alt={"img-1"}
                fill
                className={"self-start object-cover"}
              />
            </div>
            <div
              className={
                "relative " +
                ' <div className={"relative h-[400px] w-2/5 self-end lg:h-4/5'
              }
            >
              <Image
                src={"/mobile-app-UI.jpg"}
                alt={"img-1"}
                fill
                className={"self-start object-cover"}
              />
            </div>
          </div>
        </div>
        {/*Right Side*/}
        <div
          className={
            "flex h-full flex-col items-start justify-around gap-4 lg:flex-1"
          }
        >
          {WHY_STRATEGERAI_SECTION.reasons.map((reason, i) => (
            <div className={"space-y-4"} key={i}>
              <h1 className={"text-primary text-2xl font-extrabold"}>
                {reason.title}
              </h1>
              <h1>{reason.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
