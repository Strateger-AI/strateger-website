import { ReactNode } from "react";

import { Footer } from "@/components/common/layout/Footer";
import DemoStickyNav from "@/components/app/home/DemoStickyNav";

export function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="">
      {/*<StickyNav />*/}
      <DemoStickyNav />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
