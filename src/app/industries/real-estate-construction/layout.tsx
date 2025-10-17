import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "Real Estate & Construction Software Development",
  description:
    "Digitize your real estate and construction operations. We develop management systems, AR visualization tools, and ERP integrations for better collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
