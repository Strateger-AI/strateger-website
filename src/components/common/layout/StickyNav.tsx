// "use client";
//
// import { X, Menu } from "lucide-react";
// import clsx from "clsx";
// import Link from "next/link";
// import React, { useEffect, useMemo, useState } from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { Button } from "@/components/ui/button";
// import { NAV_ITEMS } from "@/utils/data/main.data";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { useInView } from "react-intersection-observer";
//
// const StickyNav = () => {
//   const [isHamburgerOn, setHambergerOn] = useState(false);
//
//   // Hero observer: 10% visibility
//   const { ref: hero10Ref, inView: hero10InView } = useInView({
//     threshold: 0.1,
//   });
//
//   // Hero observer: 80% visibility
//   const { ref: hero80Ref, inView: hero80InView } = useInView({
//     threshold: 1,
//   });
//
//
//
//
//
//     // Lock body scroll when hamburger open
//     useEffect(() => {
//       document.body.style.overflow = isHamburgerOn ? "hidden" : "";
//       return () => {
//         document.body.style.overflow = "";
//       };
//     }, [isHamburgerOn]);
//
//     return (
//       <>
//         {/* Attach refs to hero section */}
//         <div ref={hero10Ref} className="absolute top-[10vh]" />
//         <div ref={hero80Ref} className="absolute top-[90vh]" />
//         <div className={cn("flex w-screen items-center justify-center")}>
//           <NavigationMenu
//             className={clsx(
//               "fixed top-0 z-50 mx-auto my-5 flex h-20 items-center justify-between self-center rounded-full px-5 text-xl transition-all duration-300 md:w-4/5 md:px-10 lg:justify-evenly",
//
//               // // 1. Initial (before 10% scroll)
//               hero10InView &&
//                 hero80InView &&
//                 "bg-transparent text-white backdrop-blur-md",
//               //
//               // // 2. After slight scroll (10% passed, hero still mostly visible)
//               hero80InView && !hero10InView && "bg-white text-black",
//               //
//               // // 3. After hero section mostly out of view
//               !hero80InView && "bg-primary text-white shadow-lg",
//             )}
//           >
//             {/* Logo */}
//             <Link href={"/"} className="relative h-12 w-32">
//               <Image
//                 fill
//                 src="/vercel.svg"
//                 alt="logo"
//                 className="object-contain"
//               />
//             </Link>
//
//             {/* Navigation Items */}
//             <div className="hidden flex-1 items-center justify-center gap-4 lg:flex">
//               {NAV_ITEMS.map((item, index) => (
//                 <NavigationMenuItem className="list-none" key={index}>
//                   {item.categories ? (
//                     <>
//                       <NavigationMenuTrigger className={cn("!bg-transparent")}>
//                         <Link
//                           className={"hover:text-secondary"}
//                           href={item.href ?? "#"}
//                         >
//                           {item.title}
//                         </Link>
//                       </NavigationMenuTrigger>
//
//                       <NavigationMenuContent className="!fixed w-full p-2 shadow-lg">
//                         {/* Left column: Categories */}
//                         <div className="bg-secondary w-1/4 rounded-md px-6 py-8 text-white">
//                           <div className="flex flex-col gap-4">
//                             {item.categories.map((category, idx) => (
//                               <Link
//                                 key={idx}
//                                 href={category.href ?? "#"}
//                                 className="text-base font-medium hover:underline"
//                               >
//                                 {category.title}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//
//                         {/* Right column: Subcategories */}
//                         <div className="flex flex-1 flex-wrap gap-6 px-8 py-8">
//                           {item.categories.map((category, idx) => (
//                             <div key={idx} className="min-w-[180px]">
//                               <h3 className="text-md mb-2 font-semibold">
//                                 {category.title}
//                               </h3>
//                               <div className="flex flex-col gap-2">
//                                 {category.subcategories?.map((sub, subIdx) => (
//                                   <Link
//                                     key={subIdx}
//                                     href={sub.href ?? "#"}
//                                     className="text-sm text-gray-700 hover:underline"
//                                   >
//                                     {sub.title}
//                                   </Link>
//                                 ))}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </NavigationMenuContent>
//                     </>
//                   ) : (
//                     <NavigationMenuLink
//                       asChild
//                       className={cn(
//                         "!bg-transparent",
//                         navigationMenuTriggerStyle(),
//                       )}
//                     >
//                       <Link
//                         className={"hover:text-secondary"}
//                         href={item.href ?? "#"}
//                       >
//                         {item.title}
//                       </Link>
//                     </NavigationMenuLink>
//                   )}
//                 </NavigationMenuItem>
//               ))}
//             </div>
//
//             {/* CTA Button */}
//             <Button
//               className={cn(
//                 "hidden lg:flex",
//                 !hero80InView && "text-primary bg-white",
//               )}
//             >
//               Let’s Talk!
//             </Button>
//             <Button
//               onClick={() => setHambergerOn((prev) => !prev)}
//               className="lg:hidden"
//             >
//               <Menu />
//             </Button>
//
//             {/* Mobile Hamburger */}
//             <div
//               className={clsx(
//                 "fixed top-0 right-0 left-0 z-50 h-screen w-screen overflow-y-hidden bg-white px-6 py-10 text-black transition-transform duration-300 sm:w-screen lg:hidden",
//                 isHamburgerOn ? "translate-x-0" : "translate-x-full",
//               )}
//             >
//               <Button
//                 onClick={() => setHambergerOn(false)}
//                 variant="ghost"
//                 size="icon"
//                 className="absolute top-6 right-6"
//               >
//                 <X className="h-6 w-6" />
//               </Button>
//
//               <div className="mt-12 flex flex-col gap-4 px-4 lg:hidden">
//                 <Accordion type="multiple" className="w-full space-y-2">
//                   {NAV_ITEMS.map((item, index) => (
//                     <AccordionItem
//                       key={index}
//                       value={`item-${index}`}
//                       className="border-b border-gray-200 pb-2"
//                     >
//                       {item.categories && item.categories.length > 0 ? (
//                         <>
//                           <AccordionTrigger>
//                             <span className="w-full text-left text-lg font-semibold">
//                               {item.title}
//                             </span>
//                           </AccordionTrigger>
//                           <AccordionContent>
//                             <div className="my-2 flex flex-col space-y-2 pl-4">
//                               {item.categories.map((category, idx) => (
//                                 <Link
//                                   key={idx}
//                                   href={category.href ?? "#"}
//                                   className="text-sm font-medium hover:underline"
//                                   onClick={() => setHambergerOn(false)}
//                                 >
//                                   {category.title}
//                                 </Link>
//                               ))}
//                             </div>
//                           </AccordionContent>
//                         </>
//                       ) : (
//                         <Link
//                           href={item.href ?? "#"}
//                           className="w-full text-left text-lg font-semibold hover:underline"
//                           onClick={() => setHambergerOn(false)}
//                         >
//                           {item.title}
//                         </Link>
//                       )}
//                     </AccordionItem>
//                   ))}
//                 </Accordion>
//               </div>
//             </div>
//           </NavigationMenu>
//         </div>
//       </>
//     );
//   };
//
//   export default StickyNav;
//
//   // "use client";
//   //
//   // import { X } from "lucide-react";
//   // import clsx from "clsx";
//   // import Link from "next/link";
//   // import React, { useEffect, useState } from "react";
//   // import {
//   //   NavigationMenu,
//   //   NavigationMenuContent,
//   //   NavigationMenuItem,
//   //   NavigationMenuLink,
//   //   NavigationMenuTrigger,
//   //   navigationMenuTriggerStyle,
//   // } from "@/components/ui/navigation-menu";
//   // import { Button } from "@/components/ui/button";
//   // import { NAV_ITEMS } from "@/utils/data/main.data";
//   // import Image from "next/image";
//   // import { cn } from "@/lib/utils";
//   // import { Menu } from "lucide-react";
//   // import {
//   //   Accordion,
//   //   AccordionContent,
//   //   AccordionItem,
//   //   AccordionTrigger,
//   // } from "@/components/ui/accordion";
//   //
//   // const StickyNav = () => {
//   //   // const [visible, setVisible] = useState<boolean>(true);
//   //   // const [lastScrollY, setLastScrollY] = useState<number>(0);
//   //   const [isHamburgerOn, setHambergerOn] = useState<boolean>(false);
//   //
//   //   useEffect(() => {
//   //     if (isHamburgerOn) {
//   //       document.body.style.overflow = "hidden";
//   //     } else {
//   //       document.body.style.overflow = "";
//   //     }
//   //
//   //     return () => {
//   //       document.body.style.overflow = "";
//   //     };
//   //   }, [isHamburgerOn]);
//   //
//   //   return (
//   //     <>
//   //       <NavigationMenu
//   //         className={clsx(
//   //           "bg-primary fixed top-0 right-50 z-5 m-6 mx-auto h-20 items-center justify-between rounded-xl border-[1px] border-white/20 px-5 text-xl text-black backdrop-blur-md md:w-4/5 md:px-10 lg:justify-evenly",
//   //         )}
//   //       >
//   //         {/* Logo */}
//   //         <Link href={"/"} className="relative h-12 w-32">
//   //           <Image fill src="/vercel.svg" alt="logo" className="object-contain" />
//   //         </Link>
//   //
//   //         {/* Navigation Items */}
//   //         <div
//   //           className={
//   //             "lg:gap hidden max-w-3/5 flex-1 items-center justify-center gap-4 lg:flex"
//   //           }
//   //         >
//   //           {NAV_ITEMS.map((item, index) => (
//   //             <NavigationMenuItem className="list-none" key={index}>
//   //               {item.categories ? (
//   //                 <>
//   //                   <NavigationMenuTrigger className={cn("bg-white")}>
//   //                     <Link className={""} href={item.href ?? "#"}>
//   //                       {item.title}
//   //                     </Link>
//   //                   </NavigationMenuTrigger>
//   //
//   //                   <NavigationMenuContent className="!fixed !left-0 w-screen">
//   //                     <div className="flex w-screen shadow-2xl">
//   //                       {/* Left column - Categories */}
//   //                       <div className="flex w-1/4 flex-col gap-4 px-6 py-8">
//   //                         {item.categories.map((category, idx) => (
//   //                           <Link
//   //                             key={idx}
//   //                             className="text-base font-medium hover:underline"
//   //                             href={category.href ?? "#"}
//   //                           >
//   //                             {category.title}
//   //                           </Link>
//   //                         ))}
//   //                       </div>
//   //
//   //                       {/* Right column - Subcategories */}
//   //                       <div className="flex flex-1 gap-6 px-8 py-8">
//   //                         {item.categories.map((category, idx) => (
//   //                           <div key={idx} className="min-w-[180px]">
//   //                             <h3 className="text-md mb-2 font-semibold">
//   //                               {category.title}
//   //                             </h3>
//   //                             <div className="flex flex-col flex-wrap gap-2">
//   //                               {category.subcategories?.map((sub, subIdx) => (
//   //                                 <Link
//   //                                   key={subIdx}
//   //                                   className="text-sm text-gray-700 hover:underline"
//   //                                   href={sub.href ?? "#"}
//   //                                 >
//   //                                   {sub.title}
//   //                                 </Link>
//   //                               ))}
//   //                             </div>
//   //                           </div>
//   //                         ))}
//   //                       </div>
//   //                     </div>
//   //                   </NavigationMenuContent>
//   //                 </>
//   //               ) : (
//   //                 <NavigationMenuLink
//   //                   asChild
//   //                   className={cn("!bg-white", navigationMenuTriggerStyle())}
//   //                 >
//   //                   <Link href={item.href ?? "#"}>{item.title}</Link>
//   //                 </NavigationMenuLink>
//   //               )}
//   //             </NavigationMenuItem>
//   //           ))}
//   //         </div>
//   //
//   //         {/* CTA Button */}
//   //         <Button className={"hidden cursor-pointer lg:flex"}>Let’s Talk!</Button>
//   //         <Button
//   //           onClick={() => {
//   //             setHambergerOn((prev) => !prev);
//   //           }}
//   //           className={"lg:hidden"}
//   //         >
//   //           <Menu />
//   //         </Button>
//   //
//   //         {/*{Mobile Hamburger}*/}
//   //         <div
//   //           className={clsx(
//   //             "fixed top-0 right-0 left-0 z-50 h-screen w-screen overflow-y-hidden border-2 bg-white px-6 py-10 text-black transition-transform duration-300 sm:w-screen lg:hidden",
//   //             isHamburgerOn ? "translate-x-0" : "translate-x-full",
//   //           )}
//   //         >
//   //           {/* Close button */}
//   //           <Button
//   //             onClick={() => setHambergerOn(false)}
//   //             variant="ghost"
//   //             size="icon"
//   //             className="white absolute top-6 right-6"
//   //           >
//   //             <X className="h-6 w-6" />
//   //           </Button>
//   //
//   //           {/* Navigation Items */}
//   //           <div className="mt-12 flex flex-col gap-4 px-4 lg:hidden">
//   //             <Accordion type="multiple" className="w-full space-y-2">
//   //               {NAV_ITEMS.map((item, index) => (
//   //                 <AccordionItem
//   //                   key={index}
//   //                   value={`item-${index}`}
//   //                   className="border-b border-gray-200 pb-2"
//   //                 >
//   //                   {item.categories && item.categories?.length > 0 ? (
//   //                     <>
//   //                       {/* ✅ Only one element inside Trigger */}
//   //                       <AccordionTrigger className={"underline-none"}>
//   //                         <span
//   //                           className={"w-full text-left text-lg font-semibold"}
//   //                         >
//   //                           {" "}
//   //                           {item.title}
//   //                         </span>
//   //                       </AccordionTrigger>
//   //
//   //                       <AccordionContent>
//   //                         <div className="my-2 flex flex-col space-y-2 pl-4">
//   //                           {item.categories.map((category, idx) => (
//   //                             <Link
//   //                               key={idx}
//   //                               href={category.href ?? "#"}
//   //                               className="text-sm font-medium hover:underline"
//   //                               onClick={() => setHambergerOn(false)}
//   //                             >
//   //                               {category.title}
//   //                             </Link>
//   //                           ))}
//   //                         </div>
//   //                       </AccordionContent>
//   //                     </>
//   //                   ) : (
//   //                     <>
//   //                       <Link
//   //                         href={item.href ?? "#"}
//   //                         className="w-full text-left text-lg font-semibold hover:underline"
//   //                         onClick={() => setHambergerOn(false)}
//   //                       >
//   //                         {item.title}
//   //                       </Link>
//   //                     </>
//   //                   )}
//   //                 </AccordionItem>
//   //               ))}
//   //             </Accordion>
//   //           </div>
//   //         </div>
//   //       </NavigationMenu>
//   //     </>
//   //   );
//   // };
//   //
//   // export default StickyNav;
//
//   useEffect(() => {
//     document.body.style.overflow = isHamburgerOn ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isHamburgerOn]);
//
//   return (
//     <>
//       {/* Attach refs to hero section */}
//       <div ref={hero10Ref} className="absolute top-[10vh]" />
//       <div ref={hero80Ref} className="absolute top-[90vh]" />
//       <div className={cn("flex w-screen items-center justify-center")}>
//         <NavigationMenu
//           className={clsx(
//             "fixed top-0 z-50 mx-auto my-5 flex h-20 items-center justify-between self-center rounded-full px-5 text-xl transition-all duration-300 md:w-4/5 md:px-10 lg:justify-evenly",
//
//             // // 1. Initial (before 10% scroll)
//             hero10InView &&
//               hero80InView &&
//               "bg-transparent text-white backdrop-blur-md",
//             //
//             // // 2. After slight scroll (10% passed, hero still mostly visible)
//             hero80InView && !hero10InView && "bg-white text-black",
//             //
//             // // 3. After hero section mostly out of view
//             !hero80InView && "bg-primary text-white shadow-lg",
//           )}
//         >
//           {/* Logo */}
//           <Link href={"/"} className="relative h-12 w-32">
//             <Image
//               fill
//               src="/vercel.svg"
//               alt="logo"
//               className="object-contain"
//             />
//           </Link>
//
//           {/* Navigation Items */}
//           <div className="hidden flex-1 items-center justify-center gap-4 lg:flex">
//             {NAV_ITEMS.map((item, index) => (
//               <NavigationMenuItem className="list-none" key={index}>
//                 {item.categories ? (
//                   <>
//                     <NavigationMenuTrigger className={cn("!bg-transparent")}>
//                       <Link
//                         className={"hover:text-secondary"}
//                         href={item.href ?? "#"}
//                       >
//                         {item.title}
//                       </Link>
//                     </NavigationMenuTrigger>
//
//                     <NavigationMenuContent className="!fixed w-full p-2 shadow-lg">
//                       {/* Left column: Categories */}
//                       <div className="bg-secondary w-1/4 rounded-md px-6 py-8 text-white">
//                         <div className="flex flex-col gap-4">
//                           {item.categories.map((category, idx) => (
//                             <Link
//                               key={idx}
//                               href={category.href ?? "#"}
//                               className="text-base font-medium hover:underline"
//                             >
//                               {category.title}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//
//                       {/* Right column: Subcategories */}
//                       <div className="flex flex-1 flex-wrap gap-6 px-8 py-8">
//                         {item.categories.map((category, idx) => (
//                           <div key={idx} className="min-w-[180px]">
//                             <h3 className="text-md mb-2 font-semibold">
//                               {category.title}
//                             </h3>
//                             <div className="flex flex-col gap-2">
//                               {category.subcategories?.map((sub, subIdx) => (
//                                 <Link
//                                   key={subIdx}
//                                   href={sub.href ?? "#"}
//                                   className="text-sm text-gray-700 hover:underline"
//                                 >
//                                   {sub.title}
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </NavigationMenuContent>
//                   </>
//                 ) : (
//                   <NavigationMenuLink
//                     asChild
//                     className={cn(
//                       "!bg-transparent",
//                       navigationMenuTriggerStyle(),
//                     )}
//                   >
//                     <Link
//                       className={"hover:text-secondary"}
//                       href={item.href ?? "#"}
//                     >
//                       {item.title}
//                     </Link>
//                   </NavigationMenuLink>
//                 )}
//               </NavigationMenuItem>
//             ))}
//           </div>
//
//           {/* CTA Button */}
//           <Button
//             className={cn(
//               "hidden lg:flex",
//               !hero80InView && "text-primary bg-white",
//             )}
//           >
//             Let’s Talk!
//           </Button>
//           <Button
//             onClick={() => setHambergerOn((prev) => !prev)}
//             className="lg:hidden"
//           >
//             <Menu />
//           </Button>
//
//           {/* Mobile Hamburger */}
//           <div
//             className={clsx(
//               "fixed top-0 right-0 left-0 z-50 h-screen w-screen overflow-y-hidden bg-white px-6 py-10 text-black transition-transform duration-300 sm:w-screen lg:hidden",
//               isHamburgerOn ? "translate-x-0" : "translate-x-full",
//             )}
//           >
//             <Button
//               onClick={() => setHambergerOn(false)}
//               variant="ghost"
//               size="icon"
//               className="absolute top-6 right-6"
//             >
//               <X className="h-6 w-6" />
//             </Button>
//
//             <div className="mt-12 flex flex-col gap-4 px-4 lg:hidden">
//               <Accordion type="multiple" className="w-full space-y-2">
//                 {NAV_ITEMS.map((item, index) => (
//                   <AccordionItem
//                     key={index}
//                     value={`item-${index}`}
//                     className="border-b border-gray-200 pb-2"
//                   >
//                     {item.categories && item.categories.length > 0 ? (
//                       <>
//                         <AccordionTrigger>
//                           <span className="w-full text-left text-lg font-semibold">
//                             {item.title}
//                           </span>
//                         </AccordionTrigger>
//                         <AccordionContent>
//                           <div className="my-2 flex flex-col space-y-2 pl-4">
//                             {item.categories.map((category, idx) => (
//                               <Link
//                                 key={idx}
//                                 href={category.href ?? "#"}
//                                 className="text-sm font-medium hover:underline"
//                                 onClick={() => setHambergerOn(false)}
//                               >
//                                 {category.title}
//                               </Link>
//                             ))}
//                           </div>
//                         </AccordionContent>
//                       </>
//                     ) : (
//                       <Link
//                         href={item.href ?? "#"}
//                         className="w-full text-left text-lg font-semibold hover:underline"
//                         onClick={() => setHambergerOn(false)}
//                       >
//                         {item.title}
//                       </Link>
//                     )}
//                   </AccordionItem>
//                 ))}
//               </Accordion>
//             </div>
//           </div>
//         </NavigationMenu>
//       </div>
//     </>
//   );
// };
//
// export default StickyNav;
//
// // "use client";
// //
// // import { X } from "lucide-react";
// // import clsx from "clsx";
// // import Link from "next/link";
// // import React, { useEffect, useState } from "react";
// // import {
// //   NavigationMenu,
// //   NavigationMenuContent,
// //   NavigationMenuItem,
// //   NavigationMenuLink,
// //   NavigationMenuTrigger,
// //   navigationMenuTriggerStyle,
// // } from "@/components/ui/navigation-menu";
// // import { Button } from "@/components/ui/button";
// // import { NAV_ITEMS } from "@/utils/data/main.data";
// // import Image from "next/image";
// // import { cn } from "@/lib/utils";
// // import { Menu } from "lucide-react";
// // import {
// //   Accordion,
// //   AccordionContent,
// //   AccordionItem,
// //   AccordionTrigger,
// // } from "@/components/ui/accordion";
// //
// // const StickyNav = () => {
// //   // const [visible, setVisible] = useState<boolean>(true);
// //   // const [lastScrollY, setLastScrollY] = useState<number>(0);
// //   const [isHamburgerOn, setHambergerOn] = useState<boolean>(false);
// //
// //   useEffect(() => {
// //     if (isHamburgerOn) {
// //       document.body.style.overflow = "hidden";
// //     } else {
// //       document.body.style.overflow = "";
// //     }
// //
// //     return () => {
// //       document.body.style.overflow = "";
// //     };
// //   }, [isHamburgerOn]);
// //
// //   return (
// //     <>
// //       <NavigationMenu
// //         className={clsx(
// //           "bg-primary fixed top-0 right-50 z-5 m-6 mx-auto h-20 items-center justify-between rounded-xl border-[1px] border-white/20 px-5 text-xl text-black backdrop-blur-md md:w-4/5 md:px-10 lg:justify-evenly",
// //         )}
// //       >
// //         {/* Logo */}
// //         <Link href={"/"} className="relative h-12 w-32">
// //           <Image fill src="/vercel.svg" alt="logo" className="object-contain" />
// //         </Link>
// //
// //         {/* Navigation Items */}
// //         <div
// //           className={
// //             "lg:gap hidden max-w-3/5 flex-1 items-center justify-center gap-4 lg:flex"
// //           }
// //         >
// //           {NAV_ITEMS.map((item, index) => (
// //             <NavigationMenuItem className="list-none" key={index}>
// //               {item.categories ? (
// //                 <>
// //                   <NavigationMenuTrigger className={cn("bg-white")}>
// //                     <Link className={""} href={item.href ?? "#"}>
// //                       {item.title}
// //                     </Link>
// //                   </NavigationMenuTrigger>
// //
// //                   <NavigationMenuContent className="!fixed !left-0 w-screen">
// //                     <div className="flex w-screen shadow-2xl">
// //                       {/* Left column - Categories */}
// //                       <div className="flex w-1/4 flex-col gap-4 px-6 py-8">
// //                         {item.categories.map((category, idx) => (
// //                           <Link
// //                             key={idx}
// //                             className="text-base font-medium hover:underline"
// //                             href={category.href ?? "#"}
// //                           >
// //                             {category.title}
// //                           </Link>
// //                         ))}
// //                       </div>
// //
// //                       {/* Right column - Subcategories */}
// //                       <div className="flex flex-1 gap-6 px-8 py-8">
// //                         {item.categories.map((category, idx) => (
// //                           <div key={idx} className="min-w-[180px]">
// //                             <h3 className="text-md mb-2 font-semibold">
// //                               {category.title}
// //                             </h3>
// //                             <div className="flex flex-col flex-wrap gap-2">
// //                               {category.subcategories?.map((sub, subIdx) => (
// //                                 <Link
// //                                   key={subIdx}
// //                                   className="text-sm text-gray-700 hover:underline"
// //                                   href={sub.href ?? "#"}
// //                                 >
// //                                   {sub.title}
// //                                 </Link>
// //                               ))}
// //                             </div>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </NavigationMenuContent>
// //                 </>
// //               ) : (
// //                 <NavigationMenuLink
// //                   asChild
// //                   className={cn("!bg-white", navigationMenuTriggerStyle())}
// //                 >
// //                   <Link href={item.href ?? "#"}>{item.title}</Link>
// //                 </NavigationMenuLink>
// //               )}
// //             </NavigationMenuItem>
// //           ))}
// //         </div>
// //
// //         {/* CTA Button */}
// //         <Button className={"hidden cursor-pointer lg:flex"}>Let’s Talk!</Button>
// //         <Button
// //           onClick={() => {
// //             setHambergerOn((prev) => !prev);
// //           }}
// //           className={"lg:hidden"}
// //         >
// //           <Menu />
// //         </Button>
// //
// //         {/*{Mobile Hamburger}*/}
// //         <div
// //           className={clsx(
// //             "fixed top-0 right-0 left-0 z-50 h-screen w-screen overflow-y-hidden border-2 bg-white px-6 py-10 text-black transition-transform duration-300 sm:w-screen lg:hidden",
// //             isHamburgerOn ? "translate-x-0" : "translate-x-full",
// //           )}
// //         >
// //           {/* Close button */}
// //           <Button
// //             onClick={() => setHambergerOn(false)}
// //             variant="ghost"
// //             size="icon"
// //             className="white absolute top-6 right-6"
// //           >
// //             <X className="h-6 w-6" />
// //           </Button>
// //
// //           {/* Navigation Items */}
// //           <div className="mt-12 flex flex-col gap-4 px-4 lg:hidden">
// //             <Accordion type="multiple" className="w-full space-y-2">
// //               {NAV_ITEMS.map((item, index) => (
// //                 <AccordionItem
// //                   key={index}
// //                   value={`item-${index}`}
// //                   className="border-b border-gray-200 pb-2"
// //                 >
// //                   {item.categories && item.categories?.length > 0 ? (
// //                     <>
// //                       {/* ✅ Only one element inside Trigger */}
// //                       <AccordionTrigger className={"underline-none"}>
// //                         <span
// //                           className={"w-full text-left text-lg font-semibold"}
// //                         >
// //                           {" "}
// //                           {item.title}
// //                         </span>
// //                       </AccordionTrigger>
// //
// //                       <AccordionContent>
// //                         <div className="my-2 flex flex-col space-y-2 pl-4">
// //                           {item.categories.map((category, idx) => (
// //                             <Link
// //                               key={idx}
// //                               href={category.href ?? "#"}
// //                               className="text-sm font-medium hover:underline"
// //                               onClick={() => setHambergerOn(false)}
// //                             >
// //                               {category.title}
// //                             </Link>
// //                           ))}
// //                         </div>
// //                       </AccordionContent>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <Link
// //                         href={item.href ?? "#"}
// //                         className="w-full text-left text-lg font-semibold hover:underline"
// //                         onClick={() => setHambergerOn(false)}
// //                       >
// //                         {item.title}
// //                       </Link>
// //                     </>
// //                   )}
// //                 </AccordionItem>
// //               ))}
// //             </Accordion>
// //           </div>
// //         </div>
// //       </NavigationMenu>
// //     </>
// //   );
// // };
// //
// // export default StickyNav;
"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/data/main.data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DemoStickyNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const pathname = usePathname();

  return (
    <nav className="bg-primary w-11/12  fixed top-0 z-50 ">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <Link href="/" className="relative h-16 w-16 flex-shrink-0">
          <Image
            fill
            src="/strateger_logo.png"
            alt="logo"
            className="object-contain p-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-4 lg:gap-8 xl:gap-14">
              {NAV_ITEMS.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.categories ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-[0.8rem] font-medium text-white hover:bg-transparent hover:text-secondary data-[state=open]:bg-transparent data-[state=open]:text-secondary lg:text-[1rem]">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className={""}>
                        <div className="flex gap-4 rounded-xl bg-white p-3 shadow-xl l">
                          {/* Left sidebar - hidden on smaller screens */}
                          <div className="from-primary to-primary hidden w-[30%] flex-col justify-end rounded-md bg-gradient-to-b px-6 py-8 text-start text-white xl:flex">
                            <h1 className="text-4xl font-extrabold">
                              {item.title}.
                            </h1>
                            <p className="text-xl">{item.heading}</p>
                          </div>

                          {/* Grid of categories */}
                          <div className="grid w-full grid-cols-2 gap-4">
                            {item.categories.map((category, idx) => {
                              const Icon = category.icon;
                              return (
                                <Link
                                  key={idx}
                                  href={category.href ?? "#"}
                                  className="hover:bg-secondary/20 group flex flex-col gap-4 rounded-md p-4 text-black lg:flex-row lg:items-center"
                                >
                                  <span className="bg-secondary/20 group-hover:bg-primary flex items-center justify-center rounded-xl p-4">
                                    <Icon className="text-primary text-2xl group-hover:text-white" />
                                  </span>
                                  <div className="flex flex-col gap-1">
                                    <span className="text-start text-lg font-semibold xl:text-lg">
                                      {category.title}
                                    </span>
                                    <span className="text-start text-sm text-gray-500">
                                      {category.desc}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href ?? "#"}>
                      <NavigationMenuLink className="text-[0.8rem] font-medium text-white hover:text-secondary lg:text-[1rem]">
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button - Desktop */}
        <Link href="/contact" className="hidden md:block">
          <Button className="bg-white text-primary hover:bg-white/90">
            Let&#39;s talk
          </Button>
        </Link>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item, index) => (
                <div key={index}>
                  {item.categories ? (
                    <Accordion type="single" collapsible>
                      <AccordionItem
                        value={`item-${index}`}
                        className="border-0"
                      >
                        <AccordionTrigger className="py-2 text-base font-medium hover:no-underline">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-2 pl-4">
                            {item.categories.map((category, idx) => {
                              const Icon = category.icon;
                              return (
                                <Link
                                  key={idx}
                                  href={category.href ?? "#"}
                                  onClick={() => setIsOpen(false)}
                                  className="hover:bg-secondary/20 flex items-center gap-3 rounded-md p-2"
                                >
                                  {Icon && (
                                    <Icon className="text-primary h-5 w-5" />
                                  )}
                                  <span className="text-sm">
                                    {category.title}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-base font-medium hover:text-secondary"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="bg-primary mt-4 w-full text-white">
                  Let&#39;s talk
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default DemoStickyNav;
