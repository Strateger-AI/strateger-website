import { INDUSTRIES_SECTION } from "@/data/industries/industries.data";
import Image from "next/image";

export function IndustriesWeServe() {
  return (
    <div className="space-y-10 px-5 py-10 md:px-20">
      {/* Heading + Description */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl text-center md:text-start font-bold md:w-2/5 md:text-4xl lg:text-5xl p-10">
          {INDUSTRIES_SECTION.headingParts.map((part, i) => (
            <span key={i} className={part.className}>
              {part.text}{" "}
            </span>
          ))}
        </h1>
        <p className="text-base text-gray-600 md:w-3/5 md:text-lg">
          {INDUSTRIES_SECTION.description}
        </p>
      </div>

      {/* Carousel */}

      <div
        className={
          "grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:px-30 gap-4  "
        }
      >
        {INDUSTRIES_SECTION.industries.map((industry, index) => (
          <div
            key={index}
            className="relative h-[600px] group overflow-hidden rounded-xl shadow-xl bg-red-500"
          >
            <Image
              fill
              src={industry.img}
              alt="industry-img"
              className="object-cover transition-transform duration-300 group-hover:scale-120"
            />

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-primary/90 to-primary/0 z-10" />

            {/* Content */}
            <div className="absolute top-0 left-0 z-20 flex h-full w-full flex-col items-start justify-end gap-4 p-8 text-xl text-white">
              <h1 className="text-4xl font-extrabold text-white">
                {industry.title}
              </h1>
              <p>{industry.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
