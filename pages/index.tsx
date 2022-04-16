import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import { getAllPosts } from "../lib/api";
import type { Post } from "../types/cockpit";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  const t = useTranslations("about");

  return (
    <Layout title="Home" description="This is the Home Page">
      <Hero />
      <Blog posts={posts} />
      <Contact />
    </Layout>
  );
};

export default Home;

interface ServerProps {
  locale: string;
}

export async function getServerSideProps({ locale }: ServerProps) {
  const data: Post[] = await getAllPosts(3, 0);
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
      posts: data,
    },
  };
}
