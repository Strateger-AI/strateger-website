import type { Metadata } from "next";

import "../globals.css";

const siteTitle = "Terms and Conditions | Legal Policies | Strateger.ai";
const siteDescription =
  "Read Strateger.ai’s terms and conditions outlining our service use, data privacy, and compliance policies to ensure transparency in all business operations.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://strateger.ai/contact",
    siteName: "Strateger AI",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
