import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import smoothscroll from "smoothscroll-polyfill";
import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";

// kick off the polyfill!
if (typeof window !== "undefined") {
  smoothscroll.polyfill();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
