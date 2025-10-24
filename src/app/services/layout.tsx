import type { Metadata } from "next";

import "../globals.css";

const siteTitle = "Mobile Application Development Services for Android & iOS";
const siteDescription =
  "We offer custom mobile application development services that drive growth. From UI/UX to launch, our mobile development services ensure lasting success.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://strateger.ai/services",
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
