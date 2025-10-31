import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "Cyber Security Solution Provider for Businesses | Strateger.ai",
  description:
    "Protect your organization with business cyber security services. Strateger.ai offers robust data protection, risk analysis, and threat prevention solutions.ess.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
