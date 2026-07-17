import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
),
  title: "Sanggar Pelita Medan | Ruang berbagi dan bertumbuh bersama",

  description:
    "Website resmi Sanggar Pelita Medan yang menyajikan informasi kegiatan, artikel, dan ruang berbagi untuk belajar, berkarya, dan bertumbuh bersama.",

  applicationName: "Sanggar Pelita Medan",

  openGraph: {
    title: "Sanggar Pelita Medan | Ruang berbagi dan bertumbuh bersama",
    description:
      "Website resmi Sanggar Pelita Medan yang menyajikan informasi kegiatan, artikel, dan ruang berbagi untuk belajar, berkarya, dan bertumbuh bersama.",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/logo/logo.svg",
        alt: "Logo Sanggar Pelita Medan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanggar Pelita Medan | Ruang berbagi dan bertumbuh bersama",
    description:
      "Website resmi Sanggar Pelita Medan yang menyajikan informasi kegiatan, artikel, dan ruang berbagi untuk belajar, berkarya, dan bertumbuh bersama.",
    images: ["/logo/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="id"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
