import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { profile } from "@/data/profile";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.meta.url),
  title: profile.meta.title,
  description: profile.meta.description,
  openGraph: {
    title: profile.meta.title,
    description: profile.meta.description,
    type: "profile",
    images: [{ url: profile.hero.photo.src, alt: profile.hero.photo.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.meta.title,
    description: profile.meta.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
