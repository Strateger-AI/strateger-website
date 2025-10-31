import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "Custom Fintech App Development Services | Stratger.ai",
  description:
    "Build secure, scalable, and innovative fintech apps with Stratger.ai. Empower your business with next-gen banking, eWallet, and investment solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
