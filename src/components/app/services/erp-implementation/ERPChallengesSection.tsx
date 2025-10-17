// import { ERP_CHALLENGES_SECTION } from "@/data/services/erp-implementation.data";
// import { TbAlertTriangleFilled } from "react-icons/tb";
//
// export const ERPChallengesSection = () => {
//   return (
//     <section className="w-full space-y-8 px-6 py-16 md:px-20">
//       {/* Heading */}
//
//       <h2 className="text-center text-3xl leading-tight font-bold whitespace-pre-line md:text-5xl">
//         {ERP_CHALLENGES_SECTION.headingParts.map((part, index) => (
//           <span key={index} className={`${part.className} mr-1 inline-block`}>
//             {part.text}
//           </span>
//         ))}
//       </h2>
//       <p className="mt-4 text-center md:text-lg">
//         {ERP_CHALLENGES_SECTION.description}
//       </p>
//
//       {/* Challenges */}
//       <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//         {ERP_CHALLENGES_SECTION.challenges.map((challenge, index) => (
//           <div
//             key={index}
//             className="group flex h-full flex-col rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
//           >
//             <div className="mb-4 flex justify-center">
//               <TbAlertTriangleFilled className="text-3xl text-gray-500 transition-colors duration-300 group-hover:text-red-500" />
//             </div>
//             <p className="text-center">{challenge}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
"use client";
import { ERP_CHALLENGES_SECTION } from "@/data/services/erp-implementation.data";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { useState } from "react";

export const ERPChallengesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 py-16 md:px-20">
      {/* Heading */}
      <h2 className="text-center text-3xl leading-tight font-bold whitespace-pre-line md:text-5xl">
        {ERP_CHALLENGES_SECTION.headingParts.map((part, index) => (
          <span key={index} className={`${part.className} mr-1 inline-block`}>
            {part.text}
          </span>
        ))}
      </h2>

      <p className="mt-4 text-center md:text-lg">
        {ERP_CHALLENGES_SECTION.description}
      </p>

      {/* Layout: Flex with bullets left and icon right */}
      <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
        {/* Left: Bullet List */}
        <ul className="space-y-4 text-base md:text-lg list-disc list-inside max-w-2xl">
          {ERP_CHALLENGES_SECTION.challenges.map((challenge, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer transition-colors duration-200 hover:text-red-600"
            >
              {challenge}
            </li>
          ))}
        </ul>

        {/* Right: Alert Icon */}
        <div className="flex justify-center items-center md:min-w-[200px]">
          <TbAlertTriangleFilled
            className={`text-[120px] transition-all duration-500 ${
              hoveredIndex !== null
                ? "text-red-500 animate-bounce"
                : "text-gray-400"
            }`}
          />
        </div>
      </div>
    </section>
  );
};
