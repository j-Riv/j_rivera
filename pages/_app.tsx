import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../contexts/theme";
import smoothscroll from "smoothscroll-polyfill";
import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";

// kick off the polyfill!
if (typeof window !== "undefined") {
  smoothscroll.polyfill();
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // // Whenever the user explicitly chooses light mode
  // localStorage.theme = "light";

  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = "dark";

  // // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ThemeProvider>
  );
}

export default MyApp;
