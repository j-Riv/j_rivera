import { getAllPosts } from "../../lib/api";
import Page from "./[pid]";
import { Post } from "../../types/cockpit";

export default Page;

interface ServerProps {
  params: {};
}

export async function getServerSideProps({ params }: ServerProps) {
  const postsPerPage = process.env.NEXT_PUBLIC_POSTS_PER_PAGE;
  const data: { posts: Post[]; total: number } = await getAllPosts(
    postsPerPage,
    0
  );

  return {
    props: {
      posts: data.posts,
      total: data.total,
    },
  };
}
