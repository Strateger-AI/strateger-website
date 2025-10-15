import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "ERP Implementation Services | Custom ERP Solutions",
  description:
    "We offer ERP implementation services to streamline your operations. As a trusted ERP development company, we deliver efficient ERP application development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
