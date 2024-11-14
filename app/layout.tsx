import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import "@/app/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main className="flex-1 p-8 lg:p-12">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
