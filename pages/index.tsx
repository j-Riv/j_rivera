import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const t = useTranslations("about");

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{t("title")}</h1>

        <p className={styles.description}>{t("content")}</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export function getServerSideProps({ locale }: { locale: string }) {
  console.log("locale", locale);
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}