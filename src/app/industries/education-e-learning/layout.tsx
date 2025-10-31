import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "E-Learning & Education App Development Solutions",
  description:
    "Create engaging learning platforms with our expert development team. We build scalable, interactive e-learning apps for schools, startups, and enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
