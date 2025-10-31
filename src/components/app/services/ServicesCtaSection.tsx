"use client";
import { CTAButton2 } from "@/components/common/CTAButton2";
import { scrollToId } from "@/lib/utils";

type SimpleCtaSectionProps = {
  heading: string;
  description?: string;
  CTABtnLink?: string;
  CTABtnText: string;
};

export function SimpleCtaSection({ data }: { data: SimpleCtaSectionProps }) {
  return (
    <div className="bg-primary flex min-h-80 flex-col text-center  items-center justify-center  gap-8 px-10 py-10 lg:px-40">
      <h1
        className={
          " sm:max-w-4/5 text-center text-3xl font-extrabold whitespace-pre-line text-white md:text-5xl"
        }
      >
        {data.heading}
      </h1>
      {data.description && (
        <p className={"text-2xl tex text-white"}>{data.description}</p>
      )}
      {data.CTABtnLink ? (
        <CTAButton2
          version={2}
          href={data.CTABtnLink}
          label={data.CTABtnText}
        />
      ) : (
        <CTAButton2
          version={2}
          // href={data.CTABtnLink}
          onClick={() => {
            scrollToId();
          }}
          label={data.CTABtnText}
        />
      )}
      {/*<CTAButton2*/}
      {/*  version={2}*/}
      {/*  // href={data.CTABtnLink}*/}
      {/*  onClick={() => {*/}
      {/*    scrollToId();*/}
      {/*  }}*/}
      {/*  label={data.CTABtnText}*/}
      {/*/>*/}
    </div>
  );
}
