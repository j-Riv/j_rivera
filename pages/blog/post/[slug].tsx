import { useEffect } from "react";
import type { NextPage } from "next";
import prism from "prismjs";
import { getPostBySlug } from "../../../lib/api";
import PostContent from "../../../components/PostContent";
import { Post } from "../../../types/cockpit";
import Layout from "../../../components/Layout";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";

interface Props {
  post: Post;
}

const BlogPost: NextPage<Props> = ({ post }) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <Layout title={post.title} description={post.meta_description}>
      <div className="bg-zinc-800">
        <div className="container">
          <h1 className="uppercase text-3xl text-white">{post.title}</h1>
          <div className="text-white">
            <PostContent content={post.content} />
          </div>
        </div>
      </div>
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
