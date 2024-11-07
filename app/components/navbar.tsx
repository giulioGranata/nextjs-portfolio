// app/components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-8 bg-transparent dark:text-white light:text-black">
      <div className="text-xl font-bold">
        <Link href="/">
          <Image src="/gg-logo.png" alt="Logo" width={80} height={80} />
        </Link>
      </div>
      <div className="space-x-8">
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;