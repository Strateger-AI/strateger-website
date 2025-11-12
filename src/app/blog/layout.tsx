import type { Metadata } from "next";

import "../globals.css";

const siteTitle = "Strateger.ai Blog | Tech, AI & App Development Insights";
const siteDescription =
  "Explore the Strateger.ai blog for insights on AI, app development, deep learning, and digital transformation trends shaping the future of technology.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://strateger.ai/blog",
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
