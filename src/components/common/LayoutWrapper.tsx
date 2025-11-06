import { ReactNode } from "react";

import { Footer } from "@/components/common/layout/Footer";
// import DemoStickyNav from "@/components/app/home/DemoStickyNav";
// import StickyNav from "@/components/common/layout/StickyNav";
import { StickyNavTest } from "@/components/common/layout/StickyNavTest";

export function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="">
      {/*<StickyNav />*/}
      <StickyNavTest />
      {/*<DemoStickyNav />*/}
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
