"use client";

import PageTransition from "@/components/page-transition";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function AnimatedPageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="popLayout" key={pathname}>
      <PageTransition>{children}</PageTransition>
    </AnimatePresence>
  );
}
