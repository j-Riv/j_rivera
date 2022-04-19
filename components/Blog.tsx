import BlogPost from "./BlogPost";
import type { Post } from "../types/cockpit";

interface Props {
  posts: Post[];
}

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <div className="bg-zinc-800 py-10">
      <h2 className="uppercase font-bold text-4xl my-4 text-center text-white">
        Blog
      </h2>

      <div className="container relative">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-rows-1 gap-10 py-4">
          {posts.map((post: Post) => (
            <BlogPost key={post._id} post={post} hideTags={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;