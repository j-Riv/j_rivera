import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getAllPostsByCategory } from "../../../../lib/api";
import { Post } from "../../../../types/cockpit";
import Layout from "../../../../components/Layout";
import BlogPost from "../../../../components/BlogPost";
import Pagination from "../../../../components/Pagination";

type Props = {
  posts: Post[];
  total: number;
};

const CategoryPage: NextPage<Props> = ({ posts, total }) => {
  const { query } = useRouter();
  return (
    <Layout
      title={`j-Riv | Blog - ${query.tag}`}
      description={`I build things on the internet, sometimes I write some posts about it. You can find them here. All posts tagged: ${query.tag}`}
    >
      <div className="bg-zinc-300 dark:bg-zinc-800">
        <div className="container py-4">
          <h1 className="text-4xl font-bold uppercase text-black dark:text-white">
            Posts Tagged With &quot;{query.tag}
            &quot;
          </h1>
          <div className="grid grid-rows-1 gap-4 py-4 md:grid-cols-1 lg:grid-cols-3">
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

type ServerProps = {
  params: {
    tag: string;
    pid: string;
  };
  locale: string;
};

export async function getServerSideProps({ params, locale }: ServerProps) {
  const data: { posts: Post[]; total: number } = await getAllPostsByCategory(
    params.tag,
    params.pid
  );

  return {
    props: {
      posts: data.posts,
      total: data.total,
      messages: require(`../../../../locales/${locale}.json`),
    },
  };
}
