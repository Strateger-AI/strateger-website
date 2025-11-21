import { ReactNode } from "react";
import { clsx } from "clsx";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "max-w-[1300px] mx-auto py-5 md:py-8 lg:py-10 px-5 md:px-10 ",
      )}
    >
      {children}
    </div>
  );
}
