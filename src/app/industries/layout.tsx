import type { Metadata } from "next";

import "../globals.css";

const siteTitle =
  "Top Industry-Specific App Development Solutions | Stratger.ai";
const siteDescription =
  "Discover Stratger.ai’s custom app development for diverse industries, education, entertainment, healthcare, fintech, e-commerce, and more. Empower your business today.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://strateger.ai/industries",
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
