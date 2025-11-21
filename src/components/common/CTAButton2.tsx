// "use client";
//
// import React from "react";
// import { cn } from "@/lib/utils";
// import type { ButtonHTMLAttributes } from "react";
// import Link from "next/link";
//
// type PrimaryExploreButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//   version?: 1 | 2;
//   label?: string;
//   href?: string;
// };
//
// export function CTAButton2({
//   className,
//   label = "Explore",
//   version = 1,
//   href = "/",
// }: PrimaryExploreButtonProps) {
//   const isVersion2 = version === 2;
//
//   return (
//     <div>
//       <Link
//         href={href as string}
//         className={cn(
//           "group relative z-10 mx-auto flex w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border-1 px-4 py-2 pl-6 text-lg font-bold shadow-lg backdrop-blur-md transition-all",
//           isVersion2
//             ? "border-white bg-white text-white shadow-white/20"
//             : "border-primary text-primary shadow-primary/20 bg-gray-50",
//           className,
//         )}
//       >
//         {/* Text */}
//         <span
//           className={cn(
//             "relative z-10 text-xl transition-colors duration-300 ",
//             isVersion2 ? "text-primary" : "text-primary group-hover:text-white",
//             className,
//           )}
//         >
//           {label}
//         </span>
//
//         {/* Arrow Icon */}
//         <svg
//           className={cn(
//             "h-8 w-8 rotate-45 transform rounded-full border p-2 transition-all duration-300 ease-linear",
//             isVersion2
//               ? "group-hover:text-primary group-hover:bg-primary border-white text-white group-hover:rotate-90 group-hover:border-none"
//               : "border-primary text-primary group-hover:rotate-90 group-hover:border-none group-hover:bg-white",
//           )}
//           viewBox="0 0 16 19"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
//             className={cn(
//               isVersion2
//                 ? "fill-primary group-hover:fill-white"
//                 : "fill-primary group-hover:fill-primary",
//             )}
//           />
//         </svg>
//
//         {/* Horizontal expanding background overlay */}
//         {!isVersion2 && (
//           <span
//             className={cn(
//               "absolute inset-0 top-0 left-0 -z-10 h-full w-0 bg-gradient-to-r transition-all duration-700 ease-in-out group-hover:w-full",
//               isVersion2 ? "from-white to-white" : "from-primary to-primary",
//             )}
//           />
//         )}
//       </Link>
//     </div>
//   );
// }
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";

type PrimaryExploreButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  version?: 1 | 2;
  label?: string;
  href?: string;
  textClassName?: string;
};

export function CTAButton2({
  className,
  label = "Explore",
  version = 1,
  href,
  textClassName,
  ...rest
}: PrimaryExploreButtonProps) {
  const isVersion2 = version === 2;

  const commonClasses = cn(
    "group bg-white relative max-w-fit  hover:scale-[102%] duration-500 transition-transform  z-10 mx-auto flex w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border-1 px-2 sm:px-4 py-2 pl-6 text-lg font-bold shadow-lg backdrop-blur-md transition-all",
    isVersion2
      ? "border-primary  bg-white text-white shadow-white/20"
      : "border-primary hover:border-primary-highlight text-primary shadow-primary/20 shadow-sm ",
    className,
  );

  const textClasses = cn(
    "relative z-10 text-sm text-nowrap sm:text-lg transition-colors duration-300",
    textClassName,
    isVersion2 ? "text-primary" : "text-primary group-hover:text-white",
  );

  const arrowClasses = cn(
    "h-8 w-8 rotate-45 transform rounded-full border p-2 transition-all duration-300 ease-linear",
    isVersion2
      ? "group-hover:text-primary group-hover:from-primary group-hover:to-accent bg-gradient-to-r border-primary  text-white group-hover:rotate-90 group-hover:border-none"
      : " border-primary group-hover:rotate-90 group-hover:border-none group-hover:bg-white",
  );

  const pathClasses = cn(
    isVersion2
      ? "fill-primary group-hover:fill-white"
      : "fill-primary group-hover:fill-primary-highlight",
  );

  const overlayClasses = cn(
    "absolute inset-0 top-0 left-0 -z-10 h-full w-0 bg-gradient-to-br transition-all duration-700 ease-in-out group-hover:w-full",
    isVersion2 ? "from-white to-white" : "bg-primary-gradient-amber",
  );

  const content = (
    <>
      <span className={textClasses}>{label}</span>

      <svg
        className={arrowClasses}
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className={pathClasses}
        />
      </svg>

      {!isVersion2 && <span className={overlayClasses} />}
    </>
  );

  return href ? (
    <Link href={href}>
      <div className={commonClasses}>{content}</div>
    </Link>
  ) : (
    <button {...rest} className={commonClasses}>
      {content}
    </button>
  );
}
