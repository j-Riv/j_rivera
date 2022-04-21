import type { NextApiResponse } from "next";
import collect from "collect.js";
import { getAllPosts } from "../lib/api";
import { Post } from "../types/cockpit";

const BASE_URL = process.env.BASE_URL;

const generateSiteMap = (posts: Post[]) => {
  // post data
  const collection = collect(posts);
  // get tags
  const tags = collection
    .map((post: { tags: string[] }) => post.tags)
    .flatten()
    .unique()
    .map(tag => {
      const payload = collection
        .filter((item: { tags: string[] }) => {
          return collect(item.tags).contains(tag);
        })
        .all();

      return `/blog/category/${tag}`;
    })
    .all();
  // get blog posts
  const blogPosts = collection
    .map((post: { title_slug: string }) => {
      return `/blog/post/${post.title_slug}`;
    })
    .all();
  // pages
  const lang = ["/", "/es", "/resume", "/es/resume"];
  // all paths
  const allPaths = [...lang, ...blogPosts, ...tags, "/blog/category"];

  return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!--We manually set the two URLs we know already-->
        <url>
          <loc>${`${BASE_URL}`}</loc>
        </url>
        <url>
        <loc>${`${BASE_URL}/resume`}</loc>
        </url>
        <url>
          <loc>${`${BASE_URL}/blog`}</loc>
        </url>
        <url>
        <loc>${`${BASE_URL}/blog/category`}</loc>
        </url>
        ${allPaths
          .map((path: string) => {
            return `
          <url>
            <loc>${`${BASE_URL}${path}`}</loc>
          </url>
        `;
          })
          .join("")}
      </urlset>
    `;
};

const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
};

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  // We make an API call to gather the URLs for our site
  const data: { posts: Post[]; total: number } = await getAllPosts();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data.posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
