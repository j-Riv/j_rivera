import { getAllPostsByCategory } from "../../../../lib/api";
import Page from "./[page]";
import { Post } from "../../../../types/cockpit";

export default Page;

interface ServerProps {
  params: any;
}

export async function getServerSideProps({ params }: ServerProps) {
  const data: Post[] = await getAllPostsByCategory(params.tag, "1");

  return {
    props: {
      posts: data,
    },
  };
}
