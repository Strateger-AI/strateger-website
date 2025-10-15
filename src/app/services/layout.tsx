import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Mobile Application Development Services for Android & iOS",
  description:
    "We offer custom mobile application development services that drive growth. From UI/UX to launch, our mobile development services ensure lasting success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
