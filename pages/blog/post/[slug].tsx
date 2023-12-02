import type { NextPage } from "next";
import Image from "next/image";
import { getPostBySlug } from "../../../lib/api";
import PostContent from "../../../components/PostContent";
import { type Post } from "../../../types/cockpit";
import Layout from "../../../components/Layout";

type Props = {
  post: Post;
};

const BlogPost: NextPage<Props> = ({ post }) => {
  const src = `${process.env.NEXT_PUBLIC_COCKPIT_STORAGE_URL}/${post.image.path}`;
  return (
    <Layout title={post.title} description={post.meta_description}>
      <div className="bg-zinc-200 dark:bg-zinc-800">
        <div className="container mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-5xl">
          <h1 className="py-4 text-3xl uppercase text-black dark:text-white">
            {post.title}
          </h1>
          <div className="relative">
            <Image
              src={src}
              alt={post.image_alt}
              layout="responsive"
              quality={75}
              width={post.image.width}
              height={post.image.height}
              blurDataURL={src}
              placeholder="blur"
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

type ServerProps = {
  params: {
    slug: string;
  };
  locale: string;
};

export async function getServerSideProps({ params, locale }: ServerProps) {
  const data: Post = await getPostBySlug(params.slug);

  return {
    props: {
      post: data,
      messages: require(`../../../locales/${locale}.json`),
    },
  };
}
