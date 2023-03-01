import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineLanguage as LanguageIcon } from "react-icons/md";
import { FaSun as SunIcon, FaMoon as MoonIcon } from "react-icons/fa";
import { ThemeContext } from "../contexts/theme";

const MenuLinks = () => {
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
      <div className="hidden gap-1 lg:flex">
        {localeAvailable() && (
          <a
            className="mt-4 flex cursor-pointer items-center rounded border border-zinc-300 bg-zinc-300 px-4 py-2 text-sm leading-none text-black  hover:border-transparent hover:bg-zinc-600 hover:text-white dark:border-zinc-600 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white lg:mt-0"
            onClick={handlePush}
          >
            <LanguageIcon className="inline" />: {locale === "en" ? "ES" : "EN"}
          </a>
        )}
        {!isSSR && (
          <a
            className="mt-4 flex cursor-pointer items-center rounded border border-zinc-300 bg-zinc-300 px-4 py-2 text-sm leading-none text-black hover:border-transparent hover:bg-zinc-600 hover:text-white dark:border-zinc-600 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white lg:mx-1 lg:mt-0"
            onClick={handleThemeChange}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </a>
        )}
      </div>

      <Link href="/">
        <a className="mt-4 block rounded px-4 py-2 text-sm leading-none text-black hover:border-transparent hover:bg-zinc-600 hover:text-white dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white lg:mx-2 lg:mt-0 lg:inline-block">
          HOME
        </a>
      </Link>
      {pathname === "/" ? (
        <a
          onClick={() => scrollTo("#Contact")}
          className="mt-4 block cursor-pointer rounded px-4 py-2 text-sm leading-none text-black hover:border-transparent hover:bg-zinc-600 hover:text-white dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white lg:mx-2 lg:mt-0 lg:inline-block"
        >
          CONTACT
        </a>
      ) : (
        <Link href="/#Contact">
          <a className="mt-4 block rounded px-4 py-2 text-sm leading-none text-black hover:border-transparent hover:bg-zinc-600 hover:text-white dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white lg:mx-2 lg:mt-0 lg:inline-block">
            CONTACT
          </a>
        </Link>
      )}
      <Link href="/cv">
        <a className="mt-4 block rounded px-4 py-2 text-sm leading-none text-black hover:border-transparent hover:bg-zinc-600 hover:text-white dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white lg:mx-2 lg:mt-0 lg:inline-block">
          CV
        </a>
      </Link>
      <Link href="/blog">
        <a className="mt-4 block rounded px-4 py-2 text-sm leading-none text-black hover:border-transparent hover:bg-zinc-600 hover:text-white dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white lg:mx-2 lg:mt-0 lg:inline-block">
          BLOG
        </a>
      </Link>
    </>
  );
};

export default MenuLinks;
