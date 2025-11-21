// "use client";
//
// import { clsx } from "clsx";
//
// interface HamburgerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   isOpen: boolean;
//   onToggle?: () => void;
// }
//
// const HamburgerMenuButton: React.FC<HamburgerProps> = ({
//   isOpen,
//   onToggle,
//   className,
//   ...props
// }) => {
//   return (
//     <button
//       onClick={onToggle}
//       aria-pressed={isOpen}
//       className={clsx(
//         "group inline-flex w-12 h-12 text-slate-800 bg-white text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition",
//         className,
//       )}
//       {...props}
//     >
//       <span className="sr-only">Menu</span>
//
//       {/* Animated SVG */}
//       <svg
//         className="w-6 h-6 fill-current pointer-events-none"
//         viewBox="0 0 16 16"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Top Bar */}
//         <rect
//           className={clsx(
//             "origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]",
//             isOpen && "translate-x-0 translate-y-0 rotate-[315deg]",
//           )}
//           y="7"
//           width="9"
//           height="2"
//           rx="1"
//         />
//
//         {/* Middle Bar */}
//         <rect
//           className={clsx(
//             "origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]",
//             isOpen && "rotate-45",
//           )}
//           y="7"
//           width="16"
//           height="2"
//           rx="1"
//         />
//
//         {/* Bottom Bar */}
//         <rect
//           className={clsx(
//             "origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]",
//             isOpen && "translate-y-0 rotate-[135deg]",
//           )}
//           y="7"
//           width="9"
//           height="2"
//           rx="1"
//         />
//       </svg>
//     </button>
//   );
// };
//
// export default HamburgerMenuButton;
"use client";

import React from "react";
import { clsx } from "clsx";

interface HamburgerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  onToggle?: () => void;
  className?: string;
}

const HamburgerMenuButton = ({
  isOpen,
  onToggle,
  className,
  ...props
}: HamburgerProps) => {
  return (
    <button
      onClick={onToggle}
      className={clsx(
        "relative w-10 h-10 flex items-center justify-center focus:outline-none",
        className,
      )}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      {...props}
    >
      <div className="w-6 h-6 relative text-white flex items-center justify-center">
        {/* Top line */}
        <span
          className={clsx(
            "absolute h-0.5 rounded-full w-full bg-current transform transition-all duration-300 ease-in-out origin-center",
            isOpen ? "rotate-45" : "-translate-y-2",
          )}
        />

        {/* Middle line */}
        <span
          className={clsx(
            "absolute h-0.5 rounded-full w-full bg-current transition-all duration-300 ease-in-out",
            isOpen ? "opacity-0" : "opacity-100",
          )}
        />

        {/* Bottom line */}
        <span
          className={clsx(
            "absolute h-0.5 rounded-full w-full bg-current transform transition-all duration-300 ease-in-out origin-center",
            isOpen ? "-rotate-45" : "translate-y-2",
          )}
        />
      </div>
    </button>
  );
};

export default HamburgerMenuButton;
