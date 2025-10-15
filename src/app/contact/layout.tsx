import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Contact Strateger.ai | Discuss Your Project with Our Experts",
  description:
    "Get in touch with Strateger.ai to build your next digital product. Our team specializes in mobile, web, AR/VR, and enterprise software development services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
