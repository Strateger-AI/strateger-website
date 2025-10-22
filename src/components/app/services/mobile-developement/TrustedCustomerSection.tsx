import { TRUSTED_CUSTOMERS_SECTION } from "@/data/mobile/mobile-dev.data";
import Image from "next/image";

export function TrustedCustomerSection() {
  return (
    <div className="bg-primary relative mb-20  py-12">
      <h1 className="text-center font-bold text-white md:text-2xl">
        {TRUSTED_CUSTOMERS_SECTION.heading}
      </h1>
      <div className="bg-white  absolute min-h-24 md:-bottom-20 -bottom-15 lg:-bottom-25 left-1/2 md:h-auto w-4/5 -translate-x-1/2  rounded-2xl shadow-xl px-4 py-6">
        <div className="flex  justify-around items-center  gap-5">
          {TRUSTED_CUSTOMERS_SECTION.partners.map((src, index) => (
            <div
              key={index}
              className="relative w-24 h-16  md::w-30 md:h-20 lg:w-40 lg:h-24"
            >
              <Image
                src={src}
                alt={`Showcase image ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
