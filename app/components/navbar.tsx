"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./theme-switcher";

const pages = [
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
        <li key={page.name}>
          <Link
            href={page.href}
            className={currentPath === page.href ? "active" : ""}
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
    <>
      <div className="navbar px-2 lg:hidden">
        <div className="navbar-start">
          <div className="dropdown mr-2 z-[2]">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <Image
                src={"/hamburger-icon.svg"}
                alt="logo icon"
                width={24}
                height={24}
                className="dark:invert"
              />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white dark:bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <PageList />
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/">
            <Image
              src={"/gg-logo.svg"}
              alt="logo icon"
              width={100}
              height={100}
              className="dark:invert"
            />
          </Link>
        </div>
        <div className="navbar-end">
          <ThemeSwitcher />
        </div>
      </div>
      <div className="navbar px-4 hidden lg:flex">
        <div className="navbar-start">
          <Link href="/">
            <Image
              src={"/gg-logo.svg"}
              alt="logo icon"
              width={100}
              height={100}
              className="dark:invert"
            />
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1">
            <PageList />
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};

export default Navbar;
