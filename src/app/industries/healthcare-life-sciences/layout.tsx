import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "Healthcare App Development & Digital Health Solutions",
  description:
    "We develop secure healthcare apps and digital platforms that improve patient outcomes. Our data-driven solutions ensure compliance and seamless integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
