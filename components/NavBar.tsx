import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLanguage as LanguageIcon } from "react-icons/md";
import { FaSun as SunIcon, FaMoon as MoonIcon } from "react-icons/fa";
import { ThemeContext } from "../contexts/theme";
import MenuLinks from "./MenuLinks";

const NavBar = () => {
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
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-neutral-400 p-6 dark:bg-black">
      <div className="mr-6 flex flex-shrink-0 items-center text-black dark:text-white">
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
            className="mt-0 flex cursor-pointer items-center rounded border border-zinc-300 bg-zinc-300 px-4 py-2 text-sm leading-none text-black  hover:border-transparent hover:bg-zinc-600 hover:text-white dark:border-zinc-600 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white"
            onClick={handlePush}
          >
            <LanguageIcon className="inline" />: {locale === "en" ? "ES" : "EN"}
          </a>
        )}
        {!isSSR && (
          <a
            className="mt-0 flex cursor-pointer items-center rounded border border-zinc-300 bg-zinc-300 px-4 py-2 text-sm leading-none text-black hover:border-transparent hover:bg-zinc-600 hover:text-white dark:border-zinc-600 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white lg:mx-1"
            onClick={handleThemeChange}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </a>
        )}
        <button
          className="flex items-center rounded px-3 py-2 text-black dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div
        className={`transition-height h-100 w-full flex-grow duration-500 ease-in-out lg:flex lg:w-auto lg:items-start lg:justify-end ${
          navbarOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <MenuLinks />
      </div>
    </nav>
  );
};

export default NavBar;
