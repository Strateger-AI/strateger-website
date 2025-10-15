"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GAME_DEV_PROCESS } from "@/data/services/game-dev.data";
import { useInView } from "react-intersection-observer";

export default function HorizontalProgressBar() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const steps = GAME_DEV_PROCESS.processSteps;
  const [progress, setProgress] = useState(0); // 0 to 100

  const totalSteps = steps.length;
  const stepPercent = 100 / (totalSteps - 1);

  // Animate progress when in view
  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 0.5;
        return next >= 100 ? 0 : next;
      });
    }, 50); // Smaller increment for smooth animation

    return () => clearInterval(interval);
  }, [inView]);

  // Derive current step based on progress width
  const currentStep = Math.floor(progress / stepPercent);

  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-center justify-center space-y-8 py-8 md:space-y-16 md:py-16"
    >
      {/* Progress Bar */}
      <div className="relative h-14 w-full max-w-4/5">
        {/* Background line */}
        <div className="absolute top-1/2 left-0 h-3 w-full -translate-y-1/2 transform flex-row bg-gray-300" />

        {/* Animated filled line */}
        <div
          className="bg-primary absolute top-1/2 left-0 h-3 -translate-y-1/2 transform flex-col rounded-full border-2 border-white/50 shadow-xl transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />

        {/* Step Circles */}
        <div className="relative top-1 z-10 flex justify-between md:-top-3">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            return (
              <div key={index} className="flex w-10 flex-col items-center">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl font-medium transition-all duration-300 md:h-20 md:w-20",
                    isActive
                      ? "bg-primary scale-110 border-white text-white shadow-2xl"
                      : isCompleted
                        ? "bg-primary border-white text-white"
                        : "border-gray-300 bg-white text-gray-400",
                  )}
                >
                  {step.step}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-4/5 space-y-5 transition-all duration-500 ease-in-out md:space-y-10">
        <h3 className="text-primary text-3xl font-extrabold md:text-5xl">
          {steps[currentStep].heading}
        </h3>
        <p className="text-lg">{steps[currentStep].description}</p>
      </div>
    </div>
  );
}
// "use client";
//
// import React, { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
// import { GAME_DEV_PROCESS } from "@/utils/data/game-dev.data";
// import { useInView } from "react-intersection-observer";
//
// export default function ResponsiveProgressBar() {
//   const { ref, inView } = useInView({ threshold: 0.3 });
//
//   const steps = GAME_DEV_PROCESS.processSteps;
//   const [progress, setProgress] = useState(0);
//
//   const totalSteps = steps.length;
//   const stepPercent = 100 / (totalSteps - 1);
//
//   useEffect(() => {
//     if (!inView) return;
//
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         const next = prev + 1;
//         return next >= 100 ? 0 : next;
//       });
//     }, 50);
//
//     return () => clearInterval(interval);
//   }, [inView]);
//
//   const currentStep = Math.floor(progress / stepPercent);
//
//   return (
//     <div
//       ref={ref}
//       className="flex w-full justify-center gap-10 space-y-10 py-16 md:flex-col md:space-y-0 md:space-x-10"
//     >
//       {/* Progress Bar */}
//       <div
//         className={cn(
//           "relative",
//           // horizontal bar on lg and up
//           "hidden h-96 w-20 items-center bg-red-500 md:flex md:flex-col",
//           // visible only on md and down
//           "lg:hidden",
//         )}
//         flex-col
//       >
//         {/* Vertical Background Line */}
//         <div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 rounded-full bg-gray-300" />
//
//         {/* Vertical Filled Line */}
//         <div
//           className="bg-primary absolute bottom-0 left-1/2 w-1 origin-bottom rounded-full border-2 border-white/50 shadow-xl transition-all duration-100 ease-linear"
//           style={{ height: `${progress}%`, transform: "translateX(-50%)" }}
//         />
//
//         {/* Step Circles */}
//         <div className="justify-betweenflex-row relative z-10 flex h-full flex-col items-center">
//           {steps.map((step, index) => {
//             const isActive = index === currentStep;
//             const isCompleted = index < currentStep;
//             return (
//               <div key={index} className="flex items-center justify-center">
//                 <div
//                   className={cn(
//                     "flex h-10 w-10 items-center justify-center rounded-full border-2 text-lg font-medium transition-all duration-300",
//                     isActive
//                       ? "bg-primary scale-110 border-white text-white shadow-2xl"
//                       : isCompleted
//                         ? "bg-primary border-white text-white"
//                         : "border-gray-300 bg-white text-gray-400",
//                   )}
//                 >
//                   {step.step}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//
//       {/* Horizontal Progress Bar (lg and up) */}
//       <div className="relative hidden h-14 w-full lg:block">
//         {/* Background line */}
//         <div className="absolute top-1/2 left-0 h-3 w-full -translate-y-1/2 transform rounded-full bg-gray-300" />
//
//         {/* Animated filled line */}
//         <div
//           className="bg-primary absolute top-1/2 left-0 h-3 -translate-y-1/2 transform rounded-full border-2 border-white/50 shadow-xl transition-all duration-100 ease-linear"
//           style={{ width: `${progress}%` }}
//         />
//
//         {/* Step Circles */}
//         <div className="relative -top-3 z-10 flex justify-between">
//           {steps.map((step, index) => {
//             const isActive = index === currentStep;
//             const isCompleted = index < currentStep;
//             return (
//               <div key={index} className="flex w-10 flex-col items-center">
//                 <div
//                   className={cn(
//                     "flex h-20 w-20 items-center justify-center rounded-full border-2 text-xl font-medium transition-all duration-300",
//                     isActive
//                       ? "bg-primary scale-110 border-white text-white shadow-2xl"
//                       : isCompleted
//                         ? "bg-primary border-white text-white"
//                         : "border-gray-300 bg-white text-gray-400",
//                   )}
//                 >
//                   {step.step}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//
//       {/* Content Section */}
//       <div className="w-full space-y-6 transition-all duration-500 ease-in-out md:w-4/5">
//         <h3 className="text-primary text-xl font-extrabold md:text-5xl">
//           {steps[currentStep].heading}
//         </h3>
//         <p className="text-lg">{steps[currentStep].description}</p>
//       </div>
//     </div>
//   );
// }
