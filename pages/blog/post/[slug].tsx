import type { NextPage } from "next";
import Image from "next/image";
import { getPostBySlug } from "../../../lib/api";
import PostContent from "../../../components/PostContent";
import { Post } from "../../../types/cockpit";
import Layout from "../../../components/Layout";

interface Props {
  post: Post;
}

const BlogPost: NextPage<Props> = ({ post }) => {
  const src = `${process.env.NEXT_PUBLIC_COCKPIT_STORAGE_URL}/${post.image.path}`;
  return (
    <Layout title={post.title} description={post.meta_description}>
      <div className="bg-zinc-200 dark:bg-zinc-800">
        <div className="container">
          <h1 className="uppercase text-3xl text-black dark:text-white py-4">
            {post.title}
          </h1>
          <div className="post_img_wrapper">
            <Image
              src={src}
              alt={post.image_alt}
              layout="fill"
              quality={75}
              blurDataURL={src}
              placeholder="blur"
              className="post_img"
              objectFit="contain"
            />
            <p className="italic text-black dark:text-white">
              {post.image_alt}
            </p>
          </div>
          <div className="text-black dark:text-white">
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
