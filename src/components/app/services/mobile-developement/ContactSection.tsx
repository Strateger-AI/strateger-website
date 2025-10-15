import Image from "next/image";
import { CONTACTS_SECTION } from "@/data/mobile/mobile-dev.data";

import { ContactUsForm } from "@/components/common/ContactUsForm";

export function ContactSection() {
  return (
    <div className="x flex items-center justify-center space-y-5 p-20">
      <div className="relative flex w-full max-w-6xl flex-col rounded-xl shadow-xl lg:h-[80vh] lg:flex-row">
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden rounded-br-none sm:h-80 md:h-[400px] lg:absolute lg:bottom-0 lg:left-0 lg:h-[105%] lg:w-2/5">
          <Image
            src={CONTACTS_SECTION.img}
            fill
            alt="contact-img"
            className="rounded-md rounded-br-none object-cover"
          />
        </div>

        {/* Empty spacer only for lg screens to offset absolute image */}
        <div className="hidden w-2/5 lg:block" />

        {/* Form Section */}
        <div className="flex h-full flex-1 flex-col gap-5 p-5 lg:p-10">
          <h1 className="text-start text-xl leading-normal font-bold md:text-4xl lg:text-5xl">
            {CONTACTS_SECTION.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>

          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
