import { WHERE_ARE_WE_LOCATED_SECTION } from "@/data/contact/contact.data";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export function WhereWeLocated() {
  return (
    <section className="flex flex-col items-center space-y-5 bg-white px-5 py-5 md:space-y-10 md:px-20 md:py-10">
      {/* Heading */}
      <h2 className="text-center text-5xl leading-normal font-bold md:text-7xl">
        {WHERE_ARE_WE_LOCATED_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {WHERE_ARE_WE_LOCATED_SECTION.locations.map((location, i) => (
          <div
            key={i}
            className="border-primary group flex h-66 max-w-md flex-col justify-around rounded-xl border-2 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-xl md:h-88 md:max-w-lg"
          >
            <h1 className="group-hover:text-primary px-5 text-4xl font-extrabold transition-colors duration-300">
              {location.country}
            </h1>

            <div className="flex items-center text-xl">
              <IoLocationSharp className="group-hover:text-primary w-1/5 text-2xl transition duration-300 ease-in-out group-hover:scale-125" />
              <h1>{location.address}</h1>
            </div>

            <div className="flex items-center text-xl">
              <FaPhoneAlt className="group-hover:text-primary w-1/5 text-2xl transition duration-300 ease-in-out group-hover:scale-125" />
              <h1>{location.tel}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
