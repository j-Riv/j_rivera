import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../../styles/Home.module.css";
import { getAllPostsByCategory } from "../../../../lib/api";
import { Post } from "../../../../types/cockpit";
import Layout from "../../../../components/Layout";

interface Props {
  posts: Post[];
}

const CategoryPage: NextPage<Props> = ({ posts }) => {
  const { query } = useRouter();
  return (
    <Layout
      title={`Category: ${query.tag}`}
      description={`All Posts With Category: ${query.tag}`}
    >
      <h1 className={styles.title}>All Posts with Tag: {query.tag}</h1>
      {posts.map((post: Post) => (
        <p key={post._id}>{post.title}</p>
      ))}
    </Layout>
  );
};

export default CategoryPage;

interface ServerProps {
  params: {
    tag: string;
    page: string;
  };
}

export async function getServerSideProps({ params }: ServerProps) {
  const data: Post[] = await getAllPostsByCategory(params.tag, params.page);

  return {
    props: {
      posts: data,
    },
  };
}
