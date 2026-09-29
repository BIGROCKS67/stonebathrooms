import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { Intro } from "@/components/layout/Intro";
import { Cta } from "@/components/layout/Cta";
import { LenisRoot } from "@/components/layout/Lenis";
import { site, heroLine } from "@/data/site";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4f0e8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stonebathrooms.uk"),
  title: {
    default: "Stone Bathrooms | Bathroom installation specialists",
    template: "%s · Stone Bathrooms",
  },
  description: heroLine + " " + site.coverage + ".",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Stone Bathrooms",
    description: heroLine,
    url: "https://stonebathrooms.uk",
    siteName: "Stone Bathrooms",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/brand/lockup.jpg", alt: "Stone Bathrooms" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={`${sans.variable} ${display.variable} ${mono.variable} antialiased`}>
        <div className="grain" aria-hidden />
        <LenisRoot>
          <Intro />
          <Header />
          <main>{children}</main>
          <Cta />
          <Footer />
          <MobileBar />
        </LenisRoot>
      </body>
    </html>
  );
}
