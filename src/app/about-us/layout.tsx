import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "About Strateger.ai | Leading Digital Transformation Partner",
  description:
    "Discover Strateger.ai,  a technology-driven company helping businesses innovate through mobile app development, ERP, and deep learning solutions worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
