"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import PageTransition from "./page-transition";

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
