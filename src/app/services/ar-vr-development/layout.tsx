import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "Custom AR/VR Game Development & Immersive Solutions",
  description:
    "Enhance user engagement with custom AR/VR game development. We deliver advanced AR VR development services for gaming, training, and business visualization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
