import Image from "next/image";
import Link from "next/link";
import type { Post } from "../types/cockpit";
import Tag from "./Tag";

interface Props {
  post: Post;
  hideTags?: boolean;
}

const BlogPost: React.FC<Props> = ({ post, hideTags }) => {
  const src = `${process.env.NEXT_PUBLIC_COCKPIT_STORAGE_URL}${post.image.path}`;
  const display = hideTags !== undefined ? false : true;

  return (
    <article className="blog-post bg-neutral-200 dark:bg-neutral-700 rounded px-4 py-4">
      <div className="blog-image min-h-[300px] w-full relative">
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
              className="hover:opacity-80 cursor-pointer"
            />
          </a>
        </Link>
      </div>
      <h3 className="uppercase font-bold text-black dark:text-white text-2xl my-4 rounded bg-neutral-200 dark:bg-neutral-700 mx-4 -mt-6 py-2 px-4 relative">
        {post.title}
      </h3>
      {display && (
        <div className="tags flex gap-2 flex-wrap">
          {post.tags.map((tag: string, i: number) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>
      )}

      <p className="text-justify my-4 mx-4 text-black dark:text-white">
        {post.meta_description}
      </p>
      <Link href={`/blog/post/${post.title_slug}`}>
        <a className="uppercase font-bold text-lg px-4 py-2 rounded hover:bg-neutral-300 dark:bg-neutral-700 dark:text-white dark:hover:text-white dark:hover:bg-zinc-800">
          Continue Reading...
        </a>
      </Link>
    </article>
  );
};

export default BlogPost;
