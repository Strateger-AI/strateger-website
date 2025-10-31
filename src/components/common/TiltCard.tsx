// // // "use client";
// // //
// // // import React, { useRef, ReactNode, FC, useEffect } from "react";
// // //
// // // interface TiltCardProps {
// // //   children: ReactNode;
// // //   intensity?: number;
// // //   maxRotation?: number;
// // //   smoothness?: number;
// // //   className?: string;
// // // }
// // //
// // // const clamp = (num: number, min: number, max: number) =>
// // //   Math.min(Math.max(num, min), max);
// // //
// // // const lerp = (start: number, end: number, factor: number) =>
// // //   start + (end - start) * factor;
// // //
// // // const TiltCard: FC<TiltCardProps> = ({
// // //   children,
// // //   intensity = 12,
// // //   maxRotation = 8,
// // //   smoothness = 0.15,
// // //   className = "",
// // // }) => {
// // //   const cardRef = useRef<HTMLDivElement>(null);
// // //   const rotation = useRef({ x: 0, y: 0 });
// // //   const targetRotation = useRef({ x: 0, y: 0 });
// // //   const animationFrame = useRef<number>(null);
// // //   const isHovering = useRef(false);
// // //
// // //   const updateAnimation = () => {
// // //     const card = cardRef.current;
// // //     if (!card) return;
// // //
// // //     rotation.current.x = lerp(
// // //       rotation.current.x,
// // //       targetRotation.current.x,
// // //       smoothness,
// // //     );
// // //     rotation.current.y = lerp(
// // //       rotation.current.y,
// // //       targetRotation.current.y,
// // //       smoothness,
// // //     );
// // //
// // //     const threshold = 0.01;
// // //     if (
// // //       Math.abs(rotation.current.x - targetRotation.current.x) < threshold &&
// // //       Math.abs(rotation.current.y - targetRotation.current.y) < threshold &&
// // //       !isHovering.current
// // //     ) {
// // //       rotation.current.x = targetRotation.current.x;
// // //       rotation.current.y = targetRotation.current.y;
// // //       card.style.transform = `rotateX(0deg) rotateY(0deg)`;
// // //       return;
// // //     }
// // //
// // //     card.style.transform = `rotateX(${rotation.current.x}deg) rotateY(${rotation.current.y}deg)`;
// // //     animationFrame.current = requestAnimationFrame(updateAnimation);
// // //   };
// // //
// // //   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
// // //     const card = cardRef.current;
// // //     if (!card) return;
// // //
// // //     const rect = card.getBoundingClientRect();
// // //     const x = e.clientX - rect.left;
// // //     const y = e.clientY - rect.top;
// // //
// // //     const centerX = rect.width / 2;
// // //     const centerY = rect.height / 2;
// // //
// // //     const normalizeX = clamp((x - centerX) / centerX, -1, 1);
// // //     const normalizeY = clamp((y - centerY) / centerY, -1, 1);
// // //
// // //     const rotateX = normalizeY * -intensity;
// // //     const rotateY = normalizeX * intensity;
// // //
// // //     targetRotation.current = {
// // //       x: clamp(rotateX, -maxRotation, maxRotation),
// // //       y: clamp(rotateY, -maxRotation, maxRotation),
// // //     };
// // //   };
// // //
// // //   const handleMouseEnter = () => {
// // //     isHovering.current = true;
// // //     if (!animationFrame.current) {
// // //       animationFrame.current = requestAnimationFrame(updateAnimation);
// // //     }
// // //   };
// // //
// // //   const handleMouseLeave = () => {
// // //     isHovering.current = false;
// // //     targetRotation.current = { x: 0, y: 0 };
// // //     if (!animationFrame.current) {
// // //       animationFrame.current = requestAnimationFrame(updateAnimation);
// // //     }
// // //   };
// // //
// // //   useEffect(() => {
// // //     return () => {
// // //       if (animationFrame.current) {
// // //         cancelAnimationFrame(animationFrame.current);
// // //       }
// // //     };
// // //   }, []);
// // //
// // //   return (
// // //     <div style={{ perspective: "1000px" }}>
// // //       <div
// // //         ref={cardRef}
// // //         onMouseMove={handleMouseMove}
// // //         onMouseEnter={handleMouseEnter}
// // //         onMouseLeave={handleMouseLeave}
// // //         className={`relative ${className}`}
// // //         style={{
// // //           transformStyle: "preserve-3d",
// // //           willChange: "transform",
// // //         }}
// // //       >
// // //         <div
// // //           style={{
// // //             transform: "translateZ(20px)",
// // //             transformStyle: "preserve-3d",
// // //           }}
// // //         >
// // //           {children}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // // export default TiltCard;
// // "use client";
// // import { useState, MouseEvent, useCallback, ReactNode } from "react";
// //
// // function throttle<T extends (...args: any[]) => any>(
// //   func: T,
// //   delay: number,
// // ): (...args: Parameters<T>) => void {
// //   let lastCall = 0;
// //   return (...args: Parameters<T>) => {
// //     const now = new Date().getTime();
// //     if (now - lastCall < delay) {
// //       return;
// //     }
// //     lastCall = now;
// //     return func(...args);
// //   };
// // }
// //
// // const TitlCard = ({ children }: { children: ReactNode }) => {
// //   const [rotate, setRotate] = useState({ x: 0, y: 0 });
// //
// //   const onMouseMove = useCallback(
// //     throttle((e: MouseEvent<HTMLDivElement>) => {
// //       const card = e.currentTarget;
// //       const box = card.getBoundingClientRect();
// //       const x = e.clientX - box.left;
// //       const y = e.clientY - box.top;
// //       const centerX = box.width / 2;
// //       const centerY = box.height / 2;
// //       const rotateX = (y - centerY) / 7;
// //       const rotateY = (centerX - x) / 7;
// //
// //       setRotate({ x: rotateX, y: rotateY });
// //     }, 100),
// //     [],
// //   );
// //
// //   const onMouseLeave = () => {
// //     setRotate({ x: 0, y: 0 });
// //   };
// //
// //   return (
// //     <>
// //       <div
// //         className="card relative h-52 w-52 rounded-xl bg-white transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
// //         onMouseMove={onMouseMove}
// //         onMouseLeave={onMouseLeave}
// //         style={{
// //           transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
// //           transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
// //         }}
// //       >
// //         {children}
// //       </div>
// //     </>
// //   );
// // };
// // export default TitlCard;
// "use client";
// import { useState, MouseEvent, useCallback, ReactNode } from "react";
//
// function throttle<T extends (...args: any[]) => any>(
//   func: T,
//   delay: number,
// ): (...args: Parameters<T>) => void {
//   let lastCall = 0;
//   return (...args: Parameters<T>) => {
//     const now = new Date().getTime();
//     if (now - lastCall < delay) {
//       return;
//     }
//     lastCall = now;
//     return func(...args);
//   };
// }
//
// interface TiltCardProps {
//   children: ReactNode;
//   className?: string;
//   intensity?: number;
//   transitionSpeed?: number;
// }
//
// const TiltCard = ({
//   children,
//   className = "",
//   intensity = 20,
//   transitionSpeed = 600,
// }: TiltCardProps) => {
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });
//
//   const onMouseMove = useCallback(
//     throttle((e: MouseEvent<HTMLDivElement>) => {
//       const card = e.currentTarget;
//       const box = card.getBoundingClientRect();
//       const x = e.clientX - box.left;
//       const y = e.clientY - box.top;
//       const centerX = box.width / 2;
//       const centerY = box.height / 2;
//       const rotateX = (y - centerY) / intensity;
//       const rotateY = (centerX - x) / intensity;
//
//       setRotate({ x: rotateX, y: rotateY });
//     }, 50),
//     [intensity],
//   );
//
//   const onMouseLeave = () => {
//     setRotate({ x: 0, y: 0 });
//   };
//
//   return (
//     <div
//       className={`relative rounded-xl will-change-transform ${className}`}
//       onMouseMove={onMouseMove}
//       onMouseLeave={onMouseLeave}
//       style={{
//         transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
//         transition: `all ${transitionSpeed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s`,
//       }}
//     >
//       {children}
//     </div>
//   );
// };
//
// export default TiltCard;
"use client";
import React, {
  useState,
  useMemo,
  useCallback,
  ReactNode,
  MouseEvent as ReactMouseEvent,
} from "react";

// 🧩 Fully typed throttle helper (no `any` or `unknown`)
function throttle<T extends (e: ReactMouseEvent<HTMLDivElement>) => void>(
  func: T,
  delay: number,
): (e: ReactMouseEvent<HTMLDivElement>) => void {
  let lastCall = 0;

  return (e: ReactMouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    func(e);
  };
}

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number; // smaller = more dramatic tilt
  transitionSpeed?: number; // ms for transition back
  throttleDelay?: number; // how often mouse updates trigger
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  intensity = 20,
  transitionSpeed = 600,
  throttleDelay = 50,
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // ✅ `throttle` now accepts only valid mouse event functions
  const throttledMouseMove = useMemo(
    () =>
      throttle((e: ReactMouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / intensity;
        const rotateY = (centerX - x) / intensity;

        setRotate({ x: rotateX, y: rotateY });
      }, throttleDelay),
    [intensity, throttleDelay],
  );

  const onMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
  }, []);

  return (
    <div
      className={`relative rounded-xl will-change-transform ${className}`}
      onMouseMove={throttledMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: `all ${transitionSpeed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
      }}
    >
      {children}
    </div>
  );
};

export default TiltCard;
