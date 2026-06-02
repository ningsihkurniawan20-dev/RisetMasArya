import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "PT MAS Arya Indonesia",
    template: "%s | PT MAS Arya Indonesia",
  },
  description:
    "PT MAS Arya Indonesia — bagian dari MAS Holdings, eksportir pakaian terbesar di Asia Selatan.",
  keywords: [
    "MAS Arya Indonesia",
    "MAS Holdings",
    "Garment",
    "Kendal",
    "Boja",
    "Apparel Manufacturer",
  ],
  authors: [{ name: "PT MAS Arya Indonesia" }],
  openGraph: {
    title: "PT MAS Arya Indonesia",
    description:
      "PT MAS Arya Indonesia — bagian dari MAS Holdings, eksportir pakaian terbesar di Asia Selatan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
