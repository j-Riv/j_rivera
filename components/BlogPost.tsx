import Image from "next/image";
import Link from "next/link";
import type { Post } from "../types/cockpit";

interface Props {
  post: Post;
}

const COCKPIT_URL = process.env.NEXT_PUBLIC_COCKPIT_STORAGE_URL;

const BlogPost: React.FC<Props> = ({ post }) => {
  const src = `${COCKPIT_URL}${post.image.path}`;
  return (
    <div className="blog-post box-bore rounded px-4 py-4 bg-gray-500">
      <div className="blog-image min-h-[300px] w-full relative">
        <Link href={`/blog/post/${post.title_slug}`}>
          <a>
            <Image
              src={src}
              alt={post.image_alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={75}
              blurDataURL={src}
              placeholder="blur"
              className="hover:opacity-80 cursor-pointer"
            />
          </a>
        </Link>
      </div>
      <h3 className="uppercase font-bold text-2xl my-4">{post.title}</h3>
      <p className="text-justify my-4">{post.meta_description}</p>
      <Link href={`/blog/post/${post.title_slug}`}>
        <a className="uppercase font-bold text-xl px-4 py-2 border rounded bg-white hover:text-white hover:bg-zinc-600">
          Continue Reading
        </a>
      </Link>
    </div>
  );
};

export default BlogPost;
