import BlogPost from "./BlogPost";
import type { Post } from "../types/cockpit";

type Props = {
  posts: Post[];
};

const Blog = ({ posts }: Props) => {
  return (
    <div className="-mt-[300px] bg-zinc-300 py-10 dark:bg-zinc-900">
      <h2 className="relative my-4 text-center text-3xl font-bold uppercase text-white dark:text-white">
        Blog
      </h2>

      <div className="container relative">
        <div className="grid grid-rows-1 gap-4 py-4 md:grid-cols-1 lg:grid-cols-3">
          {posts.map((post: Post) => (
            <BlogPost key={post._id} post={post} hideTags={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
