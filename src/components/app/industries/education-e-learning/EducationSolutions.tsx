import { cn } from "@/lib/utils";
import Image from "next/image";
import { EDUCATION_SOLUTION_SECTIONS } from "@/data/industries/education.data";

export function EducationSolutions() {
  return (
    <section className="flex flex-col items-center space-y-5 px-5 py-5 md:space-y-10 lg:px-10 xl:px-20 md:py-10">
      {/* Heading */}

      {/* Services */}
      {EDUCATION_SOLUTION_SECTIONS.map((solution, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={cn(
              "w-full items-center justify-around lg:py-5 py-10 lg:flex",
              isEven ? "" : "flex-row-reverse",
            )}
          >
            {/* Content */}
            <div
              className={cn("flex items-start w-full px-4 lg:w-3/5 lg:px-8")}
            >
              <div className="flex flex-col items-start gap-5 rounded-xl p-6 md:p-10">
                <h2 className="text-center lg:text-start text-3xl leading-normal font-bold xl:text-4xl">
                  {solution.headingParts.map((part, i) => (
                    <span key={i} className={part.className}>
                      {part.text}{" "}
                    </span>
                  ))}
                </h2>
                <p className="mb-6 text-black text-lg xl:text-xl">
                  {solution.description}
                </p>
                <ul className="text-primary grid w-full list-inside list-disc grid-cols-1 gap-2 xl:gap-3 space-y-2 font-bold md:grid-cols-1">
                  {solution.points.map((point, i) => (
                    <li className={"md:text-sm xl:text-lg"} key={i}>
                      {point}
                    </li>
                  ))}
                </ul>
                {/*<CTAButton2 href={service.CTABtnLink} label={"Read more"} />*/}
              </div>
            </div>

            {/* Image */}
            <div
              className={`flex h-[500px] w-full justify-center px-4 lg:w-1/2`}
            >
              <div className="relative w-full">
                <Image
                  src={solution.img || "/mobile-app-UI.jpg"}
                  alt={"solution-img"}
                  fill
                  className="rounded-xl object-contain transition duration-300 hover:scale-[1.02] "
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
