import { AnimatedPageTransition } from "@/app/components/animated-page-transition";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import ThemeProvider from "@/app/components/theme-provider";
import "@/app/styles/global.css";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const font = Nunito_Sans({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={`${font.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen bg-background/80 backdrop-blur-sm">
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-10%] h-[100%] skew-y-12"
              )}
            />
            <Navbar />
            <main className="flex-grow">
              <AnimatedPageTransition>{children}</AnimatedPageTransition>
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
