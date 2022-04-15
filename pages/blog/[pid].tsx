import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { getAllPosts } from "../../lib/api";
import { Post } from "../../types/cockpit";
import Layout from "../../components/Layout";

interface Props {
  posts: Post[];
}

const Blog: NextPage<Props> = ({ posts }) => {
  const { query } = useRouter();
  return (
    <Layout title="All Posts" description="All Posts">
      <h1 className={styles.title}>All Posts {query.page}</h1>
      {posts.map((post: Post) => (
        <p key={post._id}>{post.title}</p>
      ))}
    </Layout>
  );
};

export default Blog;

interface ServerProps {
  params: {
    pid: string;
  };
}

export async function getServerSideProps({ params }: ServerProps) {
  const postsPerPage = process.env.NEXT_PUBLIC_POSTS_PER_PAGE;
  const skip = params.pid ? (Number(params.pid) - 1) * postsPerPage : 0;
  const data: Post[] = await getAllPosts(postsPerPage, skip);

  return {
    props: {
      posts: data,
    },
  };
}
