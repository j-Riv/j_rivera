import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuLinks from "./MenuLinks";

const NavBar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const toggleMenu = () => setNavbarOpen(navbarOpen => !navbarOpen);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-neutral-400 dark:bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-black dark:text-white mr-6">
        <Link href="/">
          <a>
            <Image src="/images/jriv.png" alt="j-Riv" height={60} width={60} />
          </a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 rounded text-black dark:text-white dark:hover:text-white dark:hover:bg-zinc-800"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div
        className={`w-full flex-grow lg:flex lg:items-start lg:w-auto lg:justify-end transition-height ease-in-out duration-500 h-100 ${
          navbarOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <MenuLinks />
      </div>
    </nav>
  );
};

export default NavBar;
