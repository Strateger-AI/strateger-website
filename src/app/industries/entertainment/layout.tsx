import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "Top Entertainment App Development Service | Stratger.ai",
  description:
    "Build engaging and high-performing entertainment apps with Stratger.ai. We design, develop, and scale apps that captivate audiences and boost brand growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
