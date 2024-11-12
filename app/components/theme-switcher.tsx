// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import darkIcon from "@/public/theme-switch-dark.svg";
import lightIcon from "@/public/theme-switch-light.svg";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const iconSrc = theme === "light" ? darkIcon : lightIcon;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Theme"
      className="focus:outline-none"
    >
      <Image src={iconSrc} alt="Theme switch icon" width={24} height={24} />
    </button>
  );
};

export default ThemeSwitcher;
