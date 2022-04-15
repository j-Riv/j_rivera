import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { getAllPosts } from "../../lib/api";
import PostContent from "../../components/PostContent";
import { Post } from "../../types/cockpit";

interface Props {
  posts: Post[];
}

const Blog = ({ posts }: Props) => {
  const { query } = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Category: {query.tag}</title>
        <meta name="description" content="Some Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>All Posts {query.page}</h1>
        {posts.map((post: Post) => (
          <p key={post._id}>{post.title}</p>
        ))}
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

export default Blog;

interface ServerProps {
  params: any;
}

export async function getServerSideProps({ params }: ServerProps) {
  const postsPerPage = process.env.NEXT_PUBLIC_POSTS_PER_PAGE;
  const skip = params.page ? (Number(params.page) - 1) * postsPerPage : 0;
  const data: Post[] = await getAllPosts(postsPerPage, skip);

  return {
    props: {
      posts: data,
    },
  };
}
