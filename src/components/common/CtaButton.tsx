"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

type CTAButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  href?: string;

  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  underlineClassName?: string;
};

export function CTAButton({
  label = "Get Started Now",
  href,
  icon = <ArrowRight className="h-6 w-6 md:h-10 md:w-10" />,
  size = "md",
  className,
  underlineClassName,
}: CTAButtonProps) {
  const sizeStyles = {
    sm: "text-lg md:text-2xl",
    md: "text-xl md:text-4xl",
    lg: "text-2xl md:text-5xl",
  };

  const buttonContent = (
    <span
      className={cn(
        "group relative inline-flex w-fit cursor-pointer items-center gap-2 md:gap-4",
        className,
      )}
    >
      <span
        className={cn(
          "relative text-start font-bold capitalize",
          underlineClassName,
          sizeStyles[size],
          // Animated underline
          "after:absolute after:-bottom-1 after:left-0 after:h-[4px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full",
        )}
      >
        {label}
      </span>
      {icon}
    </span>
  );

  // If href is provided → use <Link>
  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  // Otherwise, use <button>
  return (
    <button className="border-none bg-transparent p-0">{buttonContent}</button>
  );
}
