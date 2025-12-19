import type { Metadata } from "next";
import { Outfit, Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Welcome to Adnaan's portfolio",
  description:
    "AI Product Manager enabling smarter, faster, more human work. Designing AI-powered productivity products that eliminate manual drudgery.",
  keywords: [
    "AI Product Manager",
    "Product Management",
    "AI",
    "Machine Learning",
    "Enterprise AI",
    "GenAI",
    "Toronto",
    "Adnaan Khan",
  ],
  authors: [{ name: "Adnaan Khan" }],
  openGraph: {
    title: "Welcome to Adnaan's portfolio",
    description:
      "Explore the work and experiments of Adnaan Khan – Product Manager, Creator, and Builder.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Adnaan's portfolio",
    description:
      "Explore the work and experiments of Adnaan Khan – Product Manager, Creator, and Builder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${outfit.variable} ${instrument.variable}`}>
        <Preloader />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
