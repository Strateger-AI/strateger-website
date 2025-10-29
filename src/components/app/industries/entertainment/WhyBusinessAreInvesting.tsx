import { ENTERTAINMENT_TECHNOLOGIES_SECTION } from "@/data/industries/entertainment.data";

export function WhyBusinessAreInvesting() {
  return (
    <section className="flex flex-col items-center space-y-5 px-5 py-10 md:space-y-10 md:px-20">
      {/* Heading */}
      <h2 className="text-center  whitespace-pre-line leading-normal text-2xl sm:text-4xl font-bold md:text-5xl">
        {ENTERTAINMENT_TECHNOLOGIES_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h2>

      {/* Technologies Grid */}
      <div className="grid w-full xl:px-20 grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
        {ENTERTAINMENT_TECHNOLOGIES_SECTION.technologies.map((tech, index) => (
          <div
            key={index}
            className="group perspective   h-80 w-full aspect-square cursor-pointer"
          >
            <div className="relative h-full aspect-square w-full transition-transform border-2 border-primary rounded-xl  duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-5 shadow-lg backface-hidden">
                <tech.icon className="text-8xl text-primary" />
                <h3 className="text-center text-primary text-lg font-bold">
                  {tech.title}
                </h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-primary p-6 text-white shadow-lg backface-hidden rotate-y-180">
                <h3 className="text-center text-xl  font-bold">{tech.title}</h3>
                <p className=" xl:text-lg font-medium text-center">
                  {tech.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
