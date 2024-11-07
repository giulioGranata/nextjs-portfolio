import Navbar from "@/app/components/navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistFairplayDisplay = localFont({
  src: "./fonts/GeistPlayfairDisplayVF.woff",
  variable: "--font-geist-fairplay-display",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Giulio Granata portfolio",
  description: "Inspired by https://www.codewonders.dev/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistFairplayDisplay.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="p-12 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
