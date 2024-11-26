"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./theme-switcher";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const PageList = () => {
  const currentPath = usePathname();
  return (
    <>
      {pages.map((page) => (
        <li key={page.href}>
          <Link
            href={page.href}
            className={`
              ${page.name === "Home" ? "block lg:hidden" : ""}
              ${
                currentPath === page.href
                  ? "font-semibold text-primary"
                  : "text-muted-foreground"
              } hover:text-primary transition-colors`}
          >
            {page.name}
          </Link>
        </li>
      ))}
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex-1 flex justify-start lg:flex-none">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <MenuIcon />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="opacity-95">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription />
              <ul className="flex flex-col space-y-4 mt-8">
                <PageList />
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 flex justify-center lg:justify-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/gg-logo.svg"
              alt="Giulio Granata"
              width={48}
              height={48}
              className="dark:invert"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="hidden lg:flex items-center space-x-8 mr-4">
            <ul className="flex space-x-6">
              <PageList />
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
