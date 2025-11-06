import { WHY_STRATEGERAI_SECTION } from "@/data/about-us/about-us.data";
import Image from "next/image";

export function WhyStrategerSection() {
  return (
    <div className="flex flex-col items-center px-5 py-10 md:px-20 md:py-20">
      <div className="flex flex-col lg:flex-row xl:w-4/5 lg:items-stretch">
        {/*Left-side*/}
        <div className={"flex h-full gap-2 my-2 flex-col lg:w-2/5"}>
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
              "flex h-[500px] w-full justify-around lg:justify-between  lg:p-10"
            }
          >
            <div className={"relative w-2/5 self-start h-4/5"}>
              <Image
                src={WHY_STRATEGERAI_SECTION.img1}
                alt={"img-1"}
                fill
                className={
                  "self-start !relative rounded-md object-center  object-cover"
                }
              />
            </div>
            <div
              className={
                "relative " + ' <div className={"relative w-2/5 self-end h-4/5'
              }
            >
              <Image
                src={WHY_STRATEGERAI_SECTION.img2}
                alt={"img-1"}
                fill
                className={"self-start rounded-md object-center object-cover"}
              />
            </div>
          </div>
        </div>
        {/*Right Side*/}
        <div className="flex flex-col justify-between gap-4 lg:flex-1  p-6 rounded-md">
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
