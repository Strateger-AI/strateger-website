import { MESSAGE_FROM_CEO_SECTION } from "@/data/about-us/about-us.data";
import Image from "next/image";

export function MessageFromCEOSection() {
  return (
    <div className="flex items-center space-y-5 bg-white px-5 py-5 md:space-y-15 md:px-20 md:py-10">
      <div
        className={
          "flex h-full flex-col items-center gap-5 md:flex-row md:gap-0"
        }
      >
        <div className={"relative h-full md:min-w-2/5"}>
          <Image
            src={MESSAGE_FROM_CEO_SECTION.img}
            alt={"ceo-image"}
            fill
            className={
              "!relative z-10 min-h-[400px] object-cover object-top px-5"
            }
          />
          <div
            className={
              "bg-primary absolute top-0 right-20 -z-0 h-full w-3/5 rounded-xl lg:right-50"
            }
          />
        </div>
        <div className={"0 flex h-full flex-1 items-center"}>
          <div className={"flex flex-col gap-4 md:gap-5 lg:gap-7 xl:gap-10"}>
            <h1 className="sm :text-3xl text-4xl font-bold whitespace-pre-line text-white lg:text-5xl xl:text-6xl">
              {MESSAGE_FROM_CEO_SECTION.headingParts.map((part, i) => (
                <span key={i} className={part.className}>
                  {part.text}{" "}
                </span>
              ))}
            </h1>
            <p className={"lg:text-lg lg:leading-8 xl:leading-10"}>
              {MESSAGE_FROM_CEO_SECTION.message}
            </p>

            <h1 className={"text-2xl font-bold"}>
              {MESSAGE_FROM_CEO_SECTION.from.name}
            </h1>
            <h1 className={"text-primary text-3xl font-extrabold"}>
              {MESSAGE_FROM_CEO_SECTION.from.designation}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
