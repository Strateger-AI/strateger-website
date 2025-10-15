import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Strateger.ai Blog | Tech, AI & App Development Insights",
  description:
    "Explore the Strateger.ai blog for insights on AI, app development, deep learning, and digital transformation trends shaping the future of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
