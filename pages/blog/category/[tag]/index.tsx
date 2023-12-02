import { getAllPostsByCategory } from "../../../../lib/api";
import Page from "./[pid]";
import { Post } from "../../../../types/cockpit";

export default Page;

type ServerProps = {
  params: {
    tag: string;
  };
  locale: string;
};

export async function getServerSideProps({ params, locale }: ServerProps) {
  const data: { posts: Post[]; total: number } = await getAllPostsByCategory(
    params.tag,
    "1"
  );

  return {
    props: {
      posts: data.posts,
      total: data.total,
      messages: require(`../../../../locales/${locale}.json`),
    },
  };
}
