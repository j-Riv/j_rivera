import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getAllPostsByCategory } from "../../../../lib/api";
import { Post } from "../../../../types/cockpit";
import Layout from "../../../../components/Layout";
import BlogPost from "../../../../components/BlogPost";
import Pagination from "../../../../components/Pagination";

interface Props {
  posts: Post[];
  total: number;
}

const CategoryPage: NextPage<Props> = ({ posts, total }) => {
  const { query } = useRouter();
  return (
    <Layout
      title={`Category: ${query.tag}`}
      description={`All Posts With Category: ${query.tag}`}
    >
      <div className="bg-zinc-300 dark:bg-zinc-800">
        <div className="container py-4">
          <h1 className="uppercase font-bold text-4xl text-black dark:text-white">
            Posts Tagged With "{query.tag}"
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-rows-1 gap-4 py-4">
            {posts.map((post: Post) => (
              <BlogPost key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Pagination totalPosts={total} />
    </Layout>
  );
};

export default CategoryPage;

interface ServerProps {
  params: {
    tag: string;
    pid: string;
  };
}

export async function getServerSideProps({ params }: ServerProps) {
  const data: { posts: Post[]; total: number } = await getAllPostsByCategory(
    params.tag,
    params.pid
  );

  return {
    props: {
      posts: data.posts,
      total: data.total,
    },
  };
}
