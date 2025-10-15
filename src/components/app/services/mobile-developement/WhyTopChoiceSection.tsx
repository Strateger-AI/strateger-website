"use client";
import { WHY_TOP_CHOICE_SECTION } from "@/data/mobile/mobile-dev.data";
import CustomAlternatingGrid from "@/components/common/CustomAlternateGrid";

export function WhyTopChoiceSection() {
  return (
    <div className="space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      <h1 className="m-auto mx-20 text-center text-3xl leading-normal font-bold md:text-5xl">
        {WHY_TOP_CHOICE_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h1>
      <p className={"text-center"}>{WHY_TOP_CHOICE_SECTION.desc}</p>
      <CustomAlternatingGrid items={WHY_TOP_CHOICE_SECTION.reasons} />
      {/*<div className={"grid grid-cols-1 gap-4 px-10 lg:grid-cols-2"}>*/}
      {/*  {WHY_TOP_CHOICE_SECTION.reasons.map((reason, i) => {*/}
      {/*    const Icon = reason.icon;*/}
      {/*    return (*/}
      {/*      <div*/}
      {/*        className={cn(*/}
      {/*          i % 2 === 0 ? "justify-start" : "justify-end",*/}
      {/*          "group flex h-40",*/}
      {/*        )}*/}
      {/*        key={i}*/}
      {/*      >*/}
      {/*        <div*/}
      {/*          className={cn(*/}
      {/*            "relative flex h-full w-11/12 items-center rounded-xl bg-white p-5 shadow-xl",*/}
      {/*            i % 2 === 0 ? "flex pr-25" : "flex-row-reverse pl-25",*/}
      {/*          )}*/}
      {/*        >*/}
      {/*          <h1*/}
      {/*            className={cn(*/}
      {/*              "w-1/2 text-xs text-gray-600 lg:text-sm",*/}
      {/*              i % 2 === 0 ? "text-right" : "text-left",*/}
      {/*            )}*/}
      {/*          >*/}
      {/*            {reason.reason}*/}
      {/*          </h1>*/}
      {/*          <h1*/}
      {/*            className={cn(*/}
      {/*              "w-1/2 text-lg font-bold",*/}
      {/*              i % 2 === 0 ? "text-right" : "text-left",*/}
      {/*            )}*/}
      {/*          >*/}
      {/*            {reason.title}*/}
      {/*          </h1>*/}
      {/*          <Icon*/}
      {/*            className={cn(*/}
      {/*              "group-hover:bg-primary text-primary absolute rounded-xl bg-white p-3 text-8xl shadow-xl transition-colors duration-300 group-hover:text-white",*/}
      {/*              i % 2 === 0 ? "-right-10" : "-left-5",*/}
      {/*            )}*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</div>*/}
    </div>
  );
}
