import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { getAllPosts } from "../../lib/api";
import { Post } from "../../types/cockpit";
import Layout from "../../components/Layout";
import BlogPost from "../../components/BlogPost";

interface Props {
  posts: Post[];
}

const Blog: NextPage<Props> = ({ posts }) => {
  const { query } = useRouter();
  return (
    <Layout title="All Posts" description="All Posts">
      <div className="bg-zinc-800">
        <div className="container py-4">
          <h1 className="uppercase font-bold text-4xl text-white">
            All Posts {query.page}
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-rows-1 gap-10 py-4">
            {posts.map((post: Post) => (
              <BlogPost key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
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
