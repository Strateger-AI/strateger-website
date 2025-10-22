import { HEALTHCARE_TECHNOLOGIES_SECTION } from "@/data/industries/health.data";

export function HealthCareTechnology() {
  return (
    <section className="flex flex-col items-center space-y-5 px-5 py-10 md:space-y-10 md:px-20">
      {/* Heading */}
      <h2 className="text-center text-3xl whitespace-pre-line leading-normal font-bold md:text-5xl">
        {HEALTHCARE_TECHNOLOGIES_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h2>

      {/* Technologies Grid */}
      <div className="grid w-full xl:px-20 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {HEALTHCARE_TECHNOLOGIES_SECTION.technologies.map((tech, index) => (
          <div
            key={index}
            className="group perspective  h-64 w-full aspect-square cursor-pointer"
          >
            <div className="relative h-full w-full transition-transform border-2 border-primary rounded-xl  duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-5 shadow-lg backface-hidden">
                <tech.icon className="text-8xl text-primary" />
                <h3 className="text-center text-primary text-lg font-bold">
                  {tech.title}
                </h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center rounded-xl bg-primary p-4 text-white shadow-lg backface-hidden rotate-y-180">
                <h3 className="text-center text-lg font-bold">{tech.title}</h3>

                <p className=" font-medium text-center">{tech.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
