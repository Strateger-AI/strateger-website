import { REAL_ESTATE_BROKERS_INVESTMENT_SECTION } from "@/data/industries/realstate.data";

export function WhyChooseUs() {
  return (
    <section className="flex flex-col items-center space-y-5 px-5 py-10 md:space-y-10 md:px-20">
      {/* Heading */}
      <h2 className="text-center  whitespace-pre-line leading-normal text-2xl sm:text-3xl md:text-start md:text-5xl">
        {REAL_ESTATE_BROKERS_INVESTMENT_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h2>
      <p className={"text-lg"}>
        {REAL_ESTATE_BROKERS_INVESTMENT_SECTION.description}
      </p>

      {/* Technologies Grid */}
      <div className="grid w-full lg:px-10 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {REAL_ESTATE_BROKERS_INVESTMENT_SECTION.points.map((tech, index) => (
          <div
            key={index}
            className="group perspective  h-84 w-full aspect-square cursor-pointer"
          >
            <div className="relative h-full w-full p-3 transition-transform border-2 border-primary rounded-xl  duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-5 shadow-lg backface-hidden">
                <tech.icon className="text-8xl text-primary" />
                <h3 className="text-center text-primary text-lg font-bold">
                  {tech.title}
                </h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex flex-col  gap-2 items-center justify-center rounded-xl bg-primary px-4 py-6 text-white shadow-lg backface-hidden rotate-y-180">
                <h3 className="text-center  text-lg font-bold">{tech.title}</h3>

                <p className=" text-sm font-bold text-center">{tech.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
