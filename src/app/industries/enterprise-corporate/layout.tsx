import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "Enterprise Software Development & ERP Solutions",
  description:
    "Empower your enterprise with digital transformation. We deliver ERP implementation services, automation tools, and scalable business software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
