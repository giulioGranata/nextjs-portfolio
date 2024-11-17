import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import "@/app/style/globals.css";
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
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-8 lg:p-12">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
