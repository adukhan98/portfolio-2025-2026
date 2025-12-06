import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
