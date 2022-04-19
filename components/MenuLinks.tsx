import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineLanguage as LanguageIcon } from "react-icons/md";
import { FaSun as SunIcon, FaMoon as MoonIcon } from "react-icons/fa";
import { ThemeContext } from "../contexts/theme";

const MenuLinks: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const scrollTo = (target: string) => {
    const element = document.querySelector(target);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const { pathname, locale, push, asPath } = useRouter();

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
    <>
      {localeAvailable() && (
        <a
          className="flex items-center text-sm px-4 py-2 leading-none border border-zinc-300 rounded bg-zinc-300 text-black hover:text-white hover:bg-zinc-600  dark:bg-zinc-600 dark:text-white dark:border-zinc-600 hover:border-transparent dark:hover:text-white dark:hover:bg-zinc-800 mt-4 lg:mt-0 cursor-pointer"
          onClick={handlePush}
        >
          <LanguageIcon className="inline" />: {locale === "en" ? "ES" : "EN"}
        </a>
      )}
      {!isSSR && (
        <a
          className="flex items-center text-sm px-4 py-2 lg:mx-1 leading-none border border-zinc-300 rounded bg-zinc-300 text-black hover:text-white hover:bg-zinc-600 dark:bg-zinc-600 dark:text-white dark:border-zinc-600 hover:border-transparent dark:hover:text-white dark:hover:bg-zinc-800 mt-4 lg:mt-0 cursor-pointer"
          onClick={handleThemeChange}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </a>
      )}

      <Link href="/">
        <a className="block lg:inline-block text-sm px-4 py-2 lg:mx-2 leading-none rounded text-black hover:text-white hover:bg-zinc-600 dark:text-white hover:border-transparent dark:hover:text-white dark:hover:bg-zinc-800 mt-4 lg:mt-0">
          HOME
        </a>
      </Link>
      {pathname === "/" ? (
        <a
          onClick={() => scrollTo("#Contact")}
          className="block lg:inline-block text-sm px-4 py-2 lg:mx-2 leading-none rounded text-black hover:text-white hover:bg-zinc-600 dark:text-white hover:border-transparent dark:hover:text-white dark:hover:bg-zinc-800 mt-4 lg:mt-0 cursor-pointer"
        >
          CONTACT
        </a>
      ) : (
        <Link href="/#Contact">
          <a className="block lg:inline-block text-sm px-4 py-2 lg:mx-2 leading-none rounded text-black hover:text-white hover:bg-zinc-600 dark:text-white hover:border-transparent dark:hover:text-white dark:hover:bg-zinc-800 mt-4 lg:mt-0">
            CONTACT
          </a>
        </Link>
      )}
      <Link href="/cv">
        <a className="block lg:inline-block text-sm px-4 py-2 lg:mx-2 leading-none rounded text-black hover:text-white hover:bg-zinc-600 dark:text-white hover:border-transparent dark:hover:text-white dark:hover:bg-zinc-800 mt-4 lg:mt-0">
          CV
        </a>
      </Link>
      <Link href="/blog">
        <a className="block lg:inline-block text-sm px-4 py-2 lg:mx-2 leading-none rounded text-black hover:text-white hover:bg-zinc-600 dark:text-white hover:border-transparent dark:hover:text-white dark:hover:bg-zinc-800 mt-4 lg:mt-0">
          BLOG
        </a>
      </Link>
    </>
  );
};

export default MenuLinks;
