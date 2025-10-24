import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/common/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle =
  "Innovative Software & App Development Company | Strateger.ai";
const siteDescription =
  "Strateger.ai delivers cutting-edge mobile and web development services. Empower your business with scalable digital solutions and next-gen technologies.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,

  keywords: [
    "mobile app development company",
    "mobile app development services",
    "custom software development company",
    "android app development company",
    "cross platform app development",
    "ios app development company",
    "UI UX design services",
    "android app development services",
    "blockchain development company",
    "custom mobile app development",
    "ios app development services",
    "mobile application development services",
    "custom app development company",
    "game development company",
    "ERP implementation services",
    "enterprise mobile app development",
    "progressive web app development company",
    "mobile game development company",
    "progressive web app development",
    "cybersecurity services company",
    "full stack development company",
    "hybrid app development services",
    "NFT game development company",
    "augmented reality app development company",
    "Web3 game development company",
    "mobile app design and development",
    "AR VR app development company",
    "ios game development company",
    "AR VR app development services",
    "android game development services",
    "virtual reality app development company",
    "unreal engine game development services",
    "unity3D game development company",
    "mobile app UI UX design",
    "business process automation ERP",
    "data protection and cybersecurity",
    "mobile app development company Lahore",
    "software development company in Pakistan",
    "multiplayer game development company",
    "AI and deep learning services",
    "PC game development studio",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "",
    siteName: "Strateger.ai",
    images: ["/strateger_logo.png"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
