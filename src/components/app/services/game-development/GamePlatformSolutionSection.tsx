// import { GAME_PLATFORM_SOLUTIONS } from "@/data/services/game-dev.data";
// import Image from "next/image";
//
// import { CTAButton2 } from "@/components/common/CTAButton2";
//
// export function GamePlatformSolutionSection() {
//   return (
//     <div className="bg-muted z-0 flex flex-col items-center justify-center space-y-8 overflow-hidden px-5 py-10 xl:px-10 ">
//       <div
//         className={
//           "flex h-full flex-col lg:max-w-full   bg-red-500  justify-around gap-6 overflow-hidden md:gap-2 lg:flex-row"
//         }
//       >
//         <div
//           className={
//             "flex h-full flex-col items-center  justify-around bg-yellow-300 gap-8 md:px-10 lg:w-4/12 lg:items-start"
//           }
//         >
//           <h1 className="text-center text-3xl leading-snug font-bold md:text-start lg:4xl xl:text-5xl">
//             {GAME_PLATFORM_SOLUTIONS.headingParts.map((part, i) => (
//               <span key={i} className={part.className}>
//                 {part.text}{" "}
//               </span>
//             ))}
//           </h1>
//           <p className={"text-center md:text-start text-lg md:text-xl"}>
//             {GAME_PLATFORM_SOLUTIONS.desc}
//           </p>
//           <CTAButton2
//             href={GAME_PLATFORM_SOLUTIONS.CTaBtnLink}
//             label={GAME_PLATFORM_SOLUTIONS.ctaText}
//           />
//         </div>
//
//         <div
//           className={
//             "flex  max-h-3/5 lg:w-1/3 items-center justify-center bg-yellow-300  overflow-hidden"
//           }
//         >
//           {/*<div className={"relative bottom-0 h-full self-end"}>*/}
//           <Image
//             src={GAME_PLATFORM_SOLUTIONS.img}
//             fill
//             alt={"game-platform-image"}
//             className={
//               "!relative  min-h-[300px] bg-green-500 object-contain    "
//             }
//           />
//           {/*</div>*/}
//         </div>
//
//         <div
//           className={
//             "flex  flex-col items-center justify-around bg-yellow-300  gap-4 md:px-10 lg:w-2/5"
//           }
//         >
//           {GAME_PLATFORM_SOLUTIONS.solutions.map((solution, i) => (
//             <li key={i} className={"list-disc space-y-4"}>
//               <h1
//                 className={
//                   "text-primary md:text-primary md:text-start text-xl font-bold lg:text-2xl xl:text-3xl"
//                 }
//               >
//                 {solution.heading}
//               </h1>
//               <p className={"text-sm text-start"}>{solution.desc}</p>
//             </li>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { GAME_PLATFORM_SOLUTIONS } from "@/data/services/game-dev.data";
import Image from "next/image";
import { CTAButton2 } from "@/components/common/CTAButton2";

export function GamePlatformSolutionSection() {
  return (
    <div className="bg-muted z-0 flex flex-col items-center justify-center space-y-8 overflow-hidden px-5 py-10 xl:px-10">
      <div className="flex w-full flex-col gap-4 lg:gap-0 lg:flex-row lg:items-stretch">
        {/* Left Text Section */}
        <div className="flex flex-col gap-4 px-4  lg:w-4/12">
          <h1 className="text-center text-3xl font-bold leading-snug md:text-start xl:text-5xl">
            {GAME_PLATFORM_SOLUTIONS.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}{" "}
              </span>
            ))}
          </h1>
          <p className="text-center text-lg md:text-start md:text-xl">
            {GAME_PLATFORM_SOLUTIONS.desc}
          </p>
          <CTAButton2
            href={GAME_PLATFORM_SOLUTIONS.CTaBtnLink}
            label={GAME_PLATFORM_SOLUTIONS.ctaText}
          />
        </div>

        {/* Center Image Section */}
        <div className="relative flex items-center justify-center lg:w-4/12">
          <div className="relative w-full aspect-[4/5] max-w-md">
            <Image
              src={GAME_PLATFORM_SOLUTIONS.img}
              alt={GAME_PLATFORM_SOLUTIONS.imgAltText || "game-platform-image"}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Solutions Section */}
        <div className="flex flex-col justify-around  gap-4 px-4  lg:w-4/12">
          {GAME_PLATFORM_SOLUTIONS.solutions.map((solution, i) => (
            <div key={i} className="space-y-2">
              <h2 className="text-xl font-bold text-primary md:text-2xl xl:text-3xl">
                {solution.heading}
              </h2>
              <p className="text-sm text-start">{solution.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
