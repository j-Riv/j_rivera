import type { NextPage } from "next";
import styles from "../../../styles/Home.module.css";
import { getPostBySlug } from "../../../lib/api";
import PostContent from "../../../components/PostContent";
import { Post } from "../../../types/cockpit";
import Layout from "../../../components/Layout";

interface Props {
  post: Post;
}

const BlogPost: NextPage<Props> = ({ post }) => {
  return (
    <Layout title={post.title} description={post.meta_description}>
      <h1 className={styles.title}>{post.title}</h1>
      <p>{post.meta_description}</p>
      <PostContent content={post.content} />
    </Layout>
  );
};

export default BlogPost;

interface ServerProps {
  params: {
    slug: string;
  };
}

export async function getServerSideProps({ params }: ServerProps) {
  const data: Post = await getPostBySlug(params.slug);

  return {
    props: {
      post: data,
    },
  };
}
