import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLanguage as LanguageIcon } from "react-icons/md";
import { FaSun as SunIcon, FaMoon as MoonIcon } from "react-icons/fa";
import { ThemeContext } from "../contexts/theme";
import MenuLinks from "./MenuLinks";

const NavBar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [isSSR, setIsSSR] = useState(true);

  const { pathname, locale, push, asPath } = useRouter();

  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  const toggleMenu = () => setNavbarOpen(navbarOpen => !navbarOpen);

  const localeAvailable = () => {
    return pathname === "/" || pathname === "/cv" ? true : false;
  };

  const handlePush = () => {
    const lang = locale === "en" ? "es" : "en";
    push(asPath, undefined, { locale: lang });
  };

  const handleThemeChange = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-neutral-400 dark:bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-black dark:text-white mr-6">
        <Link href="/">
          <a>
            <Image
              src="/images/jriv.png"
              alt="j-Riv"
              height={60}
              width={60}
              priority
            />
          </a>
        </Link>
      </div>

      <div className="flex gap-2 lg:hidden">
        {localeAvailable() && (
          <a
            className="flex items-center text-sm px-4 py-2 leading-none border border-zinc-300 rounded bg-zinc-300 text-black hover:text-white hover:bg-zinc-600  dark:bg-zinc-600 dark:text-white dark:border-zinc-600 hover:border-transparent dark:hover:text-white dark:hover:bg-zinc-800 mt-0 cursor-pointer"
            onClick={handlePush}
          >
            <LanguageIcon className="inline" />: {locale === "en" ? "ES" : "EN"}
          </a>
        )}
        {!isSSR && (
          <a
            className="flex items-center text-sm px-4 py-2 lg:mx-1 leading-none border border-zinc-300 rounded bg-zinc-300 text-black hover:text-white hover:bg-zinc-600 dark:bg-zinc-600 dark:text-white dark:border-zinc-600 hover:border-transparent dark:hover:text-white dark:hover:bg-zinc-800 mt-0 cursor-pointer"
            onClick={handleThemeChange}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </a>
        )}
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
