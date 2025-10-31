"use client";

import Image from "next/image";
import { CONTACTS_SECTION } from "@/data/mobile/mobile-dev.data";
import { ContactUsForm } from "@/components/common/ContactUsForm";

export function ContactSection() {
  return (
    <div
      id="contact-form"
      className=" flex md:items-center  md:justify-center bg py-10 px-5 md:px-10"
    >
      <div className="relative flex w-full max-w-6xl flex-col  shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6 bg-white  md:h-[80vh] overflow-hidden rounded-xl md:flex-row">
        {/* ✅ Image Section — visible on md and up */}
        <div className="relative hidden md:block w-full md:w-2/5 h-full">
          <Image
            src={CONTACTS_SECTION.img}
            alt="contact-img"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* ✅ Form Section */}
        <div className="flex h-full flex-1 flex-col gap-5  md:px-10">
          <h1 className="text-center md:text-start text-2xl leading-normal font-bold md:text-4xl lg:text-5xl">
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
