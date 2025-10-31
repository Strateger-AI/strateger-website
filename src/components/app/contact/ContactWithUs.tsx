"use client";

import {
  CONNECT_WITH_US_SECTION,
  WHERE_ARE_WE_LOCATED_SECTION,
} from "@/data/contact/contact.data";
import TiltCard from "@/components/common/TiltCard";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export function ContactWithUs() {
  return (
    <section className="bg-gray-50 px-5 py-20 md:px-16 lg:px-28">
      {/* === Main Heading === */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="text-primary">Get in Touch</span> with Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Have questions, ideas, or partnership inquiries? We’d love to hear
          from you! Reach out to our team or find us at one of our offices.
        </p>
      </div>

      {/* === Connect With Us Section (Top) === */}
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
          {CONNECT_WITH_US_SECTION.headingParts.map((part, i) => (
            <span key={i} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h2>

        {/* Email Cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl w-full">
          {CONNECT_WITH_US_SECTION.emails.map((email, i) => (
            <TiltCard key={i}>
              <div className="group relative flex flex-col items-center justify-center rounded-2xl border-2 border-primary bg-white p-8 text-center shadow-md transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1">
                {/* Floating Icon */}
                <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-primary">
                  <MdEmail size={24} />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold text-primary group-hover:text-white">
                  {email.title}
                </h3>

                {/* Email Link */}
                <Link
                  href={`mailto:${email.mail}`}
                  className="mt-2 text-lg font-extrabold text-gray-600 transition-colors duration-300 group-hover:text-white"
                >
                  {email.mail}
                </Link>

                {/* Decorative line */}
                {/*<div className="mt-4 h-[2px] w-10 bg-primary opacity-60 transition-all duration-300 group-hover:bg-white group-hover:opacity-80" />*/}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* === Where We Are Located Section (Bottom) === */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
          {WHERE_ARE_WE_LOCATED_SECTION.headingParts.map((part, i) => (
            <span key={i} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h2>

        {/* Location Cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl w-full">
          {WHERE_ARE_WE_LOCATED_SECTION.locations.map((location, i) => (
            <TiltCard key={i}>
              <div className="group relative rounded-2xl border-2 border-primary bg-white p-8 shadow-md text-center transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1">
                {/* Floating Icon */}
                <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-primary mx-auto left-0 right-0">
                  <IoLocationSharp size={24} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-primary group-hover:text-white mb-3">
                  {location.country}
                </h3>

                <div className="flex items-center justify-center gap-3 mb-2 text-gray-600 group-hover:text-white">
                  <IoLocationSharp className="mt-1 text-2xl flex-shrink-0" />
                  <p className="max-w-xs">{location.address}</p>
                </div>

                <div className="flex items-center justify-center font-bold gap-3 text-gray-600 group-hover:text-white">
                  <FaPhoneAlt className="text-xl flex-shrink-0" />
                  <Link
                    href={`tel:${location.tel}`}
                    className="transition-colors duration-300 group-hover:text-white"
                  >
                    {location.tel}
                  </Link>
                </div>

                {/*<div className="mt-4 h-[2px] w-10 bg-primary opacity-60 transition-all duration-300 group-hover:bg-white group-hover:opacity-80 mx-auto" />*/}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
