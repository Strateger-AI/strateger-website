import type { Metadata } from "next";

import "../globals.css";

const siteTitle =
  "Contact Strateger.ai | Discuss Your Project with Our Experts";
const siteDescription =
  "Get in touch with Strateger.ai to build your next digital product. Our team specializes in mobile, web, AR/VR, and enterprise software development services.";

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
