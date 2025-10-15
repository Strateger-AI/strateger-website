import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "AI & Deep Learning Solutions for Smarter Businesses",
  description:
    "Unlock the potential of AI with our deep learning development service. We build predictive, intelligent systems that enhance automation and decision-making.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
