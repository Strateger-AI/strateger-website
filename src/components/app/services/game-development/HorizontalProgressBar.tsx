// "use client";
//
// import React, { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
// import { GAME_DEV_PROCESS } from "@/data/services/game-dev.data";
// import { useInView } from "react-intersection-observer";
//
// export default function HorizontalProgressBar() {
//   const { ref, inView } = useInView({ threshold: 0.3 });
//
//   const steps = GAME_DEV_PROCESS.processSteps;
//   const [progress, setProgress] = useState(0); // 0 to 100
//
//   const totalSteps = steps.length;
//   const stepPercent = 100 / (totalSteps - 1);
//
//   // Animate progress when in view
//   useEffect(() => {
//     if (!inView) return;
//
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         const next = prev + 0.5;
//         return next >= 100 ? 0 : next;
//       });
//     }, 50); // Smaller increment for smooth animation
//
//     return () => clearInterval(interval);
//   }, [inView]);
//
//   // Derive current step based on progress width
//   const currentStep = Math.floor(progress / stepPercent);
//
//   return (
//     <div
//       ref={ref}
//       className="flex w-full flex-col items-center justify-center space-y-8 py-8 md:space-y-16 md:py-16"
//     >
//       {/* Progress Bar */}
//       <div className="relative h-14 w-full max-w-4/5">
//         {/* Background line */}
//         <div className="absolute top-1/2 left-0 h-3 w-full -translate-y-1/2 transform flex-row bg-gray-300" />
//
//         {/* Animated filled line */}
//         <div
//           className="bg-primary absolute top-1/2 left-0 h-3 -translate-y-1/2 transform flex-col rounded-full border-2 border-white/50 shadow-xl transition-all duration-100 ease-linear"
//           style={{ width: `${progress}%` }}
//         />
//
//         {/* Step Circles */}
//         <div className="relative top-1 z-10 flex justify-between md:-top-3">
//           {steps.map((step, index) => {
//             const isActive = index === currentStep;
//             const isCompleted = index < currentStep;
//             return (
//               <div key={index} className="flex w-10 flex-col items-center">
//                 <div
//                   className={cn(
//                     "flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl font-medium transition-all duration-300 md:h-20 md:w-20",
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
//       <div className="w-4/5 space-y-5 transition-all duration-500 ease-in-out md:space-y-10">
//         <h3 className="text-primary text-3xl font-extrabold md:text-5xl">
//           {steps[currentStep].heading}
//         </h3>
//         <p className="text-lg">{steps[currentStep].description}</p>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GAME_DEV_PROCESS } from "@/data/services/game-dev.data";
import { useInView } from "react-intersection-observer";

export default function HorizontalProgressBar() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const steps = GAME_DEV_PROCESS.processSteps;
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isPaused, setIsPaused] = useState(false);

  const totalSteps = steps.length;
  const stepPercent = 100 / (totalSteps - 1);

  // Animate progress when in view
  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Pause at 100 for 2 seconds before resetting
          if (!isPaused) {
            setIsPaused(true);
            setTimeout(() => {
              setProgress(0);
              setIsPaused(false);
            }, 2000);
          }
          return prev;
        }
        const next = prev + 0.5;
        return next >= 100 ? 100 : next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [inView, isPaused]);

  // Derive current step based on progress width
  const currentStep = Math.min(
    Math.floor(progress / stepPercent),
    totalSteps - 1,
  );

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
