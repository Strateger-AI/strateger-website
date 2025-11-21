// "use client";
//
// import * as React from "react";
// import Link from "next/link";
// import { JSX } from "react";
// import { useIsMobile } from "@/hooks/use-mobile";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { NAV_ITEMS } from "@/data/main.data";
//
// export function StickyNavTest(): JSX.Element {
//   const isMobile = useIsMobile();
//
//   return (
//     <NavigationMenu viewport={isMobile}>
//       <NavigationMenuList className="flex-wrap">
//         {NAV_ITEMS.map((nav) => (
//           <NavigationMenuItem key={nav.title}>
//             {/* If item has categories, render dropdown */}
//             {nav.categories && nav.categories.length > 0 ? (
//               <>
//                 <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid gap-3 bg-red-600  md:w-[500px] lg:w-[600px] lg:grid-cols-2">
//                     <li className="col-span-full mb-2">
//                       <div className="text-lg font-semibold text-foreground">
//                         {nav.heading}
//                       </div>
//                     </li>
//                     {nav.categories.map((cat) => {
//                       const Icon = cat.icon;
//                       return (
//                         <ListItem
//                           key={cat.title}
//                           href={cat.href}
//                           title={cat.title}
//                         >
//                           <div className="flex items-center gap-2">
//                             {Icon && <Icon className="w-4 h-4 text-primary" />}
//                             <span>{cat.desc}</span>
//                           </div>
//                         </ListItem>
//                       );
//                     })}
//                   </ul>
//                 </NavigationMenuContent>
//               </>
//             ) : (
//               // If no subcategories, just a simple link
//               <NavigationMenuLink
//                 asChild
//                 className={navigationMenuTriggerStyle()}
//               >
//                 <Link href={nav.href}>{nav.title}</Link>
//               </NavigationMenuLink>
//             )}
//           </NavigationMenuItem>
//         ))}
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }
//
// // Reusable ListItem component
// function ListItem({
//   title,
//   href,
//   children,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string; title: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link
//           href={href}
//           className="block rounded-md p-3 hover:bg-accent focus:bg-accent"
//         >
//           <div className="text-sm font-medium leading-none mb-1">{title}</div>
//           <div className="text-muted-foreground text-sm leading-snug line-clamp-2">
//             {children}
//           </div>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }
"use client";

import * as React from "react";
import Link from "next/link";
import { JSX, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/data/main.data";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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
import Container from "@/components/common/Container";
import HamburgerMenuButton from "@/components/common/HamburgerMenuButton";

export const StickyNavTest = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r  from-primary  to-accent fixed top-0 z-50 w-full">
      <Container className=" flex h-20  !py-0 items-center justify-between  ">
        {/* <nav className=" md:fixed  md:top-5 z-50 transition-transform duration-300 w-full">*/}
        {/*  <div className=" flex mx-auto h-20 items-center shadow-xl transition-transform duration-300   justify-between md:w-11/12 bg-primary md:rounded-full   px-5 md:px-10">*/}
        {/*//     /!* Logo *!/*/}
        <Link href="/" className="flex items-center">
          <div className="relative h-16 w-16 flex-shrink-0">
            <Image
              fill
              src="/strateger_logo.png"
              alt="logo"
              className="object-contain p-2"
            />
          </div>
          <h1 className="font-bold text-3xl text-white ml-2">Strateger.ai</h1>
        </Link>

        {/* Desktop Navigation */}
        <div
          className={"flex-1 hidden  lg:flex  justify-center items-center  "}
        >
          <NavigationMenu className={"w-full flex-1 "}>
            <NavigationMenuList className=" flex items-center justify-betweenflex-1">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.categories && item.categories.length > 0 ? (
                    <>
                      <NavigationMenuTrigger className="!bg-transparent ">
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent text-sm focus:text-white  px-0 !uppercase  hover:bg-transparent hover:text-amber-500  !hover:text-secondary focus:bg-transparent font-bold text-white md:text-md  lg:text-lg",
                          )}
                        >
                          <Link href={item.href ?? "#"}>{item.title}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {/*<div className="flex gap-4 rounded-xl w-[600px] lg:w-[800px] xl:w-[730px]">*/}
                        <div className="flex gap-4 rounded-xl w-[500px] lg:w-[730px]">
                          {/* Left sidebar with heading */}
                          {/*<div className="from-primary to-primary hidden w-[30%] flex-col justify-end rounded-md bg-gradient-to-b px-6 py-8 text-start text-white xl:flex">*/}
                          {/*  <h1 className="text-4xl font-extrabold">*/}
                          {/*    {item.title}.*/}
                          {/*  </h1>*/}
                          {/*  <p className="text-xl">{item.heading}</p>*/}
                          {/*</div>*/}

                          {/* Grid of categories */}
                          <ul className="grid w-full grid-col-1 md:grid-cols-2 gap-4">
                            {item.categories.map((category) => {
                              const Icon = category.icon;
                              return (
                                <ListItem
                                  key={category.title}
                                  href={category.href ?? "#"}
                                  title={category.title}
                                  icon={Icon}
                                >
                                  {category.desc}
                                </ListItem>
                              );
                            })}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-[0.8rem] hover:text-amber-500 uppercase lg:text-lg focus:bg-transparent focus:text-white font-bold text-white  hover:bg-transparent   ",
                      )}
                    >
                      <Link href={item.href ?? "#"}>{item.title}</Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button - Desktop */}
        <Link href="/contact" className="hidden lg:block">
          <Button
            size={"lg"}
            className="bg-primary-gradient-amber text-white text-xl font-bold cursor-pointer  !py-2  hover:bg-amber-400"
          >
            Let&#39;s Talk
          </Button>
        </Link>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            {/*<Button className="bg-white text-primary hover:bg-white/90">*/}
            {/*  <Menu className="h-6 w-6" />*/}
            {/*</Button>*/}
            <HamburgerMenuButton isOpen={isOpen} />
          </SheetTrigger>
          <SheetContent side="right" className="min-w-screen">
            {/* Transparent Header */}
            <SheetHeader className="  w-full  flex flex-row items-center justify-between h-20 bg-gradient-to-r  from-primary  to-accent    ">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    fill
                    src="/strateger_logo.png"
                    alt="logo"
                    className="object-contain p-2"
                  />
                </div>
                <h1 className="font-bold text-3xl text-white ml-2">
                  Strateger.ai
                </h1>
              </Link>

              {/* Hamburger Button */}
              <HamburgerMenuButton
                isOpen={isOpen}
                onToggle={() => setIsOpen(false)}
              />

              {/* Optional SheetTitle (empty) */}
              <SheetTitle className="hidden" />
            </SheetHeader>

            {/* Sheet Content */}
            <div className="mt-6 flex px-10 flex-col gap-4">
              {NAV_ITEMS.map((item, index) => (
                <div key={index}>
                  {item.categories ? (
                    <Accordion type="single" collapsible>
                      <AccordionItem
                        value={`item-${index}`}
                        className="border-0"
                      >
                        <AccordionTrigger className="py-2 text-xl font-medium hover:no-underline">
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
                                  className="hover:bg-secondary/20 text-lg flex items-center gap-3 rounded-md p-2"
                                >
                                  {Icon && (
                                    <Icon className="text-primary h-5 w-5" />
                                  )}
                                  <span>{category.title}</span>
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
                      className="block py-2 text-xl font-medium hover:text-secondary"
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
      </Container>
    </nav>
  );
};

// Reusable ListItem component matching your design
function ListItem({
  title,
  href,
  children,
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="hover:bg-secondary/20 group hover:border-l-4 border-primary transition-all duration-300 flex flex-col gap-3 lg:gap-4 items-start   rounded-md p-4 md:flex-row lg:items-center"
        >
          {Icon && (
            <span className="bg-secondary/20 flex-shrink-0 group-hover:bg-primary flex items-center justify-center rounded-xl p-3">
              <Icon className="text-primary group-hover:text-white !h-6 !w-6" />
            </span>
          )}
          <div className="flex flex-col gap-1">
            <span className="text-start lg:text-lg font-bold">{title}</span>
            <span className="text-start text-xs   lg:text-sm text-gray-500">
              {children}
            </span>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
