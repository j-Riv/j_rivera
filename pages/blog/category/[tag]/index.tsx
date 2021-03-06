import { getAllPostsByCategory } from "../../../../lib/api";
import Page from "./[pid]";
import { Post } from "../../../../types/cockpit";

export default Page;

interface ServerProps {
  params: {
    tag: string;
  };
}

export async function getServerSideProps({ params }: ServerProps) {
  const data: { posts: Post[]; total: number } = await getAllPostsByCategory(
    params.tag,
    "1"
  );

  return {
    props: {
      posts: data.posts,
      total: data.total,
    },
  };
}
