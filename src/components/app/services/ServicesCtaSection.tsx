import { CTAButton2 } from "@/components/common/CTAButton2";

type SimpleCtaSectionProps = {
  heading: string;
  description?: string;
  CTABtnLink: string;
  CTABtnText: string;
};

export function SimpleCtaSection({ data }: { data: SimpleCtaSectionProps }) {
  return (
    <div className="bg-primary flex min-h-80 flex-col text-center  items-center justify-center  gap-8 px-10 py-10 lg:px-40">
      <h1
        className={
          "max-w-4/5 text-center text-3xl font-extrabold whitespace-pre-line text-white md:text-5xl"
        }
      >
        {data.heading}
      </h1>
      {data.description && (
        <p className={"text-2xl tex text-white"}>{data.description}</p>
      )}

      <CTAButton2 version={2} href={data.CTABtnLink} label={data.CTABtnText} />
    </div>
  );
}
