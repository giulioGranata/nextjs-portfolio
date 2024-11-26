import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import PageTransition from "@/app/components/page-transition";
import ThemeProvider from "@/app/components/theme-provider";
import "@/app/styles/global.css";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Giulio Granata - Senior Frontend Developer",
  description:
    "Giulio Granata's portfolio, a Senior Frontend Developer specialized in React and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.className} animated-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background/80 backdrop-blur-sm">
            <Navbar />
            <main className="min-h-screen">
              <AnimatePresence mode="wait">
                <PageTransition>{children}</PageTransition>
              </AnimatePresence>
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
