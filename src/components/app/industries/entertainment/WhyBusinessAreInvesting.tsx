import { ENTERTAINMENT_TECHNOLOGIES_SECTION } from "@/data/industries/entertainment.data";

export function WhyBusinessAreInvesting() {
  return (
    <section className="flex flex-col items-center space-y-5 px-5 py-10 md:space-y-10 md:px-20">
      {/* Heading */}
      <h2 className="text-center text-3xl whitespace-pre-line leading-normal font-bold md:text-5xl">
        {ENTERTAINMENT_TECHNOLOGIES_SECTION.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h2>

      {/* Technologies Grid */}
      <div className="grid w-full lg:px-20 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ENTERTAINMENT_TECHNOLOGIES_SECTION.technologies.map((tech, index) => (
          <div
            key={index}
            className="group perspective  h-64 w-full aspect-square cursor-pointer"
          >
            <div className="relative h-full w-full transition-transform border-2 border-primary rounded-xl  duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-5 shadow-lg backface-hidden">
                <tech.icon className="text-8xl text-primary" />
                <h3 className="text-center text-lg font-bold">{tech.title}</h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-primary px-4 py-6 text-white shadow-lg backface-hidden rotate-y-180">
                <p className="text-lg font-bold text-center">{tech.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
