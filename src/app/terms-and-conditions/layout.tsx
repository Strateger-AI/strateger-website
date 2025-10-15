import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Terms and Conditions | Legal Policies | Strateger.ai",
  description:
    "Read Strateger.ai’s terms and conditions outlining our service use, data privacy, and compliance policies to ensure transparency in all business operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
