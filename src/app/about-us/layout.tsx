import type { Metadata } from "next";

import "../globals.css";

const siteTitle = "About Strateger.ai | Leading Digital Transformation Partner";
const siteDescription =
  "Discover Strateger.ai,  a technology-driven company helping businesses innovate through mobile app development, ERP, and deep learning solutions worldwide.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://strateger.ai/about-us",
    siteName: "Strateger AI",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
