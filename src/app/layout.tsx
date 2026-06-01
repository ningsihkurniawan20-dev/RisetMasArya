import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "MAS Arya Peduli - CSR & Public Relations Research",
    template: "%s | MAS Arya Peduli",
  },
  description:
    "Penelitian tentang strategi hubungan masyarakat PT MAS Arya Indonesia melalui program CSR 'MAS Arya Peduli' dalam membangun hubungan dengan masyarakat lokal.",
  keywords: [
    "CSR",
    "Public Relations",
    "MAS Arya Indonesia",
    "Penelitian",
    "Tanggung Jawab Sosial Perusahaan",
    "Kendal",
  ],
  authors: [{ name: "Tim Riset MAS Arya" }],
  openGraph: {
    title: "MAS Arya Peduli - CSR & Public Relations Research",
    description:
      "Penelitian strategi hubungan masyarakat PT MAS Arya Indonesia melalui program CSR",
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
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
