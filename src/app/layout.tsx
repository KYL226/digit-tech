import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digit Tech Group | Solutions Digitales Modernes",
  description:
    "Digit Tech Group accompagne entreprises et porteurs de projets avec des services de développement web/mobile, graphisme, montage vidéo, customisation, formation numérique et intelligence artificielle.",
  keywords: [
    "Digit Tech Group",
    "Création site web",
    "Application web",
    "Application mobile",
    "Graphisme",
    "Montage vidéo",
    "Intelligence artificielle",
  ],
  authors: [{ name: "Digit Tech Group" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Digit Tech Group | Chaque création part d'une vision",
    description:
      "Agence digitale spécialisée en développement web/mobile, création visuelle, formation numérique et intelligence artificielle.",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
