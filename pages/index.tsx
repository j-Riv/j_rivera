import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import { getAllPosts } from "../lib/api";
import type { Post } from "../types/cockpit";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  const t = useTranslations("hero");

  return (
    <Layout title={`${t("iam")} j-Riv`} description={t("content")}>
      <Hero />
      <About />
      <Blog posts={posts} />
      <Contact />
    </Layout>
  );
};

export default Home;

type ServerProps = {
  locale: string;
};

export async function getServerSideProps({ locale }: ServerProps) {
  const data: { posts: Post[]; total: number } = await getAllPosts(3, 0);
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
      posts: data.posts,
    },
  };
}
