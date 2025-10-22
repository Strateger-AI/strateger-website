// import { DEEP_LEARNING_SERVICES } from "@/data/services/deep-learning.data";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
//
// const DeepLearningServicesSection = () => {
//   return (
//     <section className="flex flex-col items-center space-y-5 px-5 py-5 md:space-y-10 md:px-20 md:py-10">
//       {/* Heading */}
//       <h2 className="text-center text-3xl leading-normal font-bold md:text-5xl">
//         {DEEP_LEARNING_SERVICES.headingParts.map((part, i) => (
//           <span key={i} className={part.className}>
//             {part.text}{" "}
//           </span>
//         ))}
//       </h2>
//
//       {/* Services */}
//       {DEEP_LEARNING_SERVICES.services.map((service, index) => {
//         const isEven = index % 2 === 0;
//
//         return (
//           <div
//             key={index}
//             className={cn(
//               "w-full items-center justify-around py-10 md:flex",
//               isEven ? "" : "flex-row-reverse",
//             )}
//           >
//             {/* Content */}
//             <div className={cn("flex w-full px-4 md:w-3/5 md:px-8")}>
//               <div className="flex flex-col items-start gap-5 rounded-xl p-6 md:p-10">
//                 <h3 className="text-primary mb-4 text-2xl font-extrabold md:text-4xl">
//                   {service.title}
//                 </h3>
//                 <p className="mb-6 text-black lg:text-xl">{service.desc}</p>
//                 <ul className="text-primary grid w-full list-inside list-disc grid-cols-1 gap-5 space-y-2 font-bold md:grid-cols-2">
//                   {service.points.map((point, i) => (
//                     <li
//                       className={"md:text-sm list-outside lg:text-lg"}
//                       key={i}
//                     >
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//                 {/*<CTAButton2 href={service.CTABtnLink} label={"Read more"} />*/}
//               </div>
//             </div>
//
//             {/* Image */}
//             <div
//               className={`flex h-[500px] w-full justify-center px-4 md:w-1/2`}
//             >
//               <div className="relative w-full">
//                 <Image
//                   src={service.img || "/mobile-app-UI.jpg"}
//                   alt={service.title}
//                   fill
//                   className="rounded-xl object-contain transition duration-300 hover:scale-[1.02]"
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </section>
//   );
// };
//
// export default DeepLearningServicesSection;
import { DEEP_LEARNING_SERVICES } from "@/data/services/deep-learning.data";
import Image from "next/image";
import { cn } from "@/lib/utils";

const DeepLearningServicesSection = () => {
  return (
    <section className="flex flex-col items-center space-y-5 px-5 py-5 lg:space-y-10 lg:px-20 lg:py-10">
      {/* Heading */}
      <h2 className="text-center text-3xl leading-normal font-bold lg:text-5xl">
        {DEEP_LEARNING_SERVICES.headingParts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}{" "}
          </span>
        ))}
      </h2>

      {/* Services */}
      {DEEP_LEARNING_SERVICES.services.map((service, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={cn(
              "w-full items-center justify-around  lg:py-10",
              "flex flex-col", // Default to column layout
              isEven ? "lg:flex-row" : "lg:flex-row-reverse", // Switch to row at lg breakpoint
            )}
          >
            {/* Content */}
            <div className={cn("flex w-full px-4 lg:w-3/5 lg:px-8")}>
              <div className="flex flex-col items-start gap-5 rounded-xl p-6 lg:p-10">
                <h3 className="text-primary mb-4 text-3xl font-extrabold lg:text-4xl">
                  {service.title}
                </h3>
                <p className="mb-6 text-black lg:text-xl">{service.desc}</p>
                <ul className="text-primary grid w-full list-inside list-disc grid-cols-1 gap-5 space-y-2 font-bold lg:grid-cols-2">
                  {service.points.map((point, i) => (
                    <li
                      className={"lg:text-sm list-outside xl:text-lg"}
                      key={i}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                {/*<CTAButton2 href={service.CTABtnLink} label={"Read more"} />*/}
              </div>
            </div>

            {/* Image */}
            <div className="flex h-[500px] w-full  justify-center px-4 lg:w-1/2">
              <div className="relative w-full">
                <Image
                  src={service.img || "/mobile-app-UI.jpg"}
                  alt={service.title}
                  fill
                  className="rounded-xl object-cover
                   lg:object-contain transition duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DeepLearningServicesSection;
