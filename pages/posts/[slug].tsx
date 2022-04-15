import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { getPostBySlug } from "../../lib/api";
import PostContent from "../../components/PostContent";
import { Post } from "../../types/cockpit";

interface Props {
  post: any;
}

const Post = ({ post }: Props) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.meta_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            {" "}
            <h1 className={styles.title}>{post.title}</h1>
            <p>{post.meta_description}</p>
            <PostContent content={post.content} />
          </>
        )}
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

export default Post;

interface ServerProps {
  params: any;
}

export async function getServerSideProps({ params }: ServerProps) {
  const data: Post = await getPostBySlug(params.slug);

  return {
    props: {
      post: data,
    },
  };
}

// export async function getStaticPaths() {
//   const allPosts: Post[] = await getAllPosts();
//   return {
//     paths: allPosts.map((post: any) => `/posts/${post.title_slug}`) || [],
//     fallback: true,
//   };
// }
