import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/experience">Experience</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
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
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
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
