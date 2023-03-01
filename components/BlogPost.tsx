import Image from "next/image";
import Link from "next/link";
import type { Post } from "../types/cockpit";
import Tag from "./Tag";

type Props = {
  post: Post;
  hideTags?: boolean;
};

const BlogPost = ({ post, hideTags }: Props) => {
  const src = `${process.env.NEXT_PUBLIC_COCKPIT_STORAGE_URL}${post.image.path}`;
  const display = hideTags !== undefined ? false : true;

  return (
    <article className="blog-post rounded bg-neutral-200 px-4 py-4 dark:bg-neutral-700">
      <div className="blog-image relative min-h-[300px] w-full">
        <Link href={`/blog/post/${post.title_slug}`}>
          <a>
            <Image
              src={src}
              alt={post.image_alt}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={post.image.width}
              height={post.image.width}
              quality={75}
              blurDataURL={src}
              placeholder="blur"
              className="cursor-pointer hover:opacity-80"
            />
          </a>
        </Link>
      </div>
      <h3 className="relative my-4 mx-4 -mt-6 rounded bg-neutral-200 py-2 px-4 text-2xl font-bold uppercase text-black dark:bg-neutral-700 dark:text-white">
        {post.title}
      </h3>
      {display && (
        <div className="tags flex flex-wrap gap-2">
          {post.tags.map((tag: string, i: number) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>
      )}

      <p className="my-4 mx-4 text-justify text-black dark:text-white">
        {post.meta_description}
      </p>
      <Link href={`/blog/post/${post.title_slug}`}>
        <a className="rounded px-4 py-2 text-lg font-bold uppercase hover:bg-neutral-300 dark:bg-neutral-700 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white">
          Continue Reading...
        </a>
      </Link>
    </article>
  );
};

export default BlogPost;
