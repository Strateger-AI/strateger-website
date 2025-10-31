import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "Game Development Services & Studio for Mobile and PC Games",
  description:
    "We’re a leading game development agency delivering immersive experiences. Our team builds engaging mobile game development projects using Unity 3D & Unreal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
