import { getAllPosts } from "../../lib/api";
import Page from "./[page]";
import { Post } from "../../types/cockpit";

export default Page;

interface ServerProps {
  params: {};
}

export async function getServerSideProps({ params }: ServerProps) {
  const postsPerPage = process.env.NEXT_PUBLIC_POSTS_PER_PAGE;
  const data: Post[] = await getAllPosts(postsPerPage, 0);

  return {
    props: {
      posts: data,
    },
  };
}
