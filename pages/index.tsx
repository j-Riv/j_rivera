import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const t = useTranslations("about");

  return (
    <Layout title="Home" description="This is the Home Page">
      <h1 className="text-3xl font-bold underline">{t("title")}</h1>

      <p className={styles.description}>{t("content")}</p>
    </Layout>
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
