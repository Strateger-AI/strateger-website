"use client";
import Image from "next/image";
import { CTAButton2 } from "@/components/common/CTAButton2";
import { scrollToId } from "@/lib/utils";

type CTASection2withImageProps = {
  heading: string;
  desc: string;
  img?: string;
  CTABtnLink: string;
  CTABtnText: string;
};

export function CTASectionWithImage({
  data,
}: {
  data: CTASection2withImageProps;
}) {
  return (
    <div className="bg-primary relative mt-20 flex flex-col shadow-xl justify-between items-center gap-5 px-10 py-15 lg:py-20 lg:flex-row lg:pl-30">
      {/* Text Section */}
      <div className="flex flex-col items-start space-y-4 xl:w-3/5 lg:w-2/5">
        <h1 className="text-start text-3xl font-bold text-white md:text-4xl">
          {data.heading}
        </h1>
        <p className="lg:text-md text-white">{data.desc}</p>
        <span>
          <CTAButton2
            // href={data.CTABtnLink}
            onClick={() => {
              scrollToId();
            }}
            version={2}
            label={data.CTABtnText}
          />
        </span>
      </div>

      {/* Image Section (Responsive positioning) */}
      <div className="relative h-[400px] hidden w-full md:flex lg:absolute transition-transform duration-300 lg:right-0 lg:bottom-0 lg:h-[110%]  lg:w-3/5 xl:w-2/5">
        <Image
          src={data?.img as string}
          fill
          className=" justify-end  "
          alt="cta-img"
        />
      </div>
    </div>
  );
}
