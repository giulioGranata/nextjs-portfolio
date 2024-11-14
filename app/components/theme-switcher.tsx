// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Theme"
      className="focus:outline-none"
    >
      <Image
        src={"/theme-switch.svg"}
        alt="Theme switch icon"
        width={24}
        height={24}
        className="dark:invert"
      />
    </button>
  );
};

export default ThemeSwitcher;
