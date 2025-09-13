import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import Header from "../component/Header";
import TopHeader from "../component/TopHeader";
import Footer from "../component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ministry of Immigration - Fiji Passports, Fiji Permits",
  description: "Ministry of Immigration - Fiji Passports, Fiji Permits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
