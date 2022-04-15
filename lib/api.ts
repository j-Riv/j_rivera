import { Entries } from "../types/cockpit";

const API_URL = process.env.COCKPIT_POSTS_URL;
const postsPerPage = process.env.NEXT_PUBLIC_POSTS_PER_PAGE;

const fetchAPI = async (query: {}) => {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(query),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json;
};

export const getAllPosts = async (
  limit: false | number = false,
  skip: false | number = false
) => {
  const query: any = {
    filter: { published: true },
    sort: { date_published: -1 },
    populate: 1,
  };

  if (limit) query.limit = limit;
  if (skip) query.skip = skip;

  const data: Entries = await fetchAPI(query);

  return data?.entries;
};

export const getPostBySlug = async (slug: string) => {
  const data: Entries = await fetchAPI({
    filter: { published: true, title_slug: slug },
    sort: { _created: -1 },
    populate: 1,
  });

  return data?.entries[0];
};

export const getAllPostsByCategory = async (
  tag: string,
  page: string,
  limit: false | number = false,
  skip: false | number = false
) => {
  const query = {
    filter: { published: true, tags: { $in: [tag] } },
    sort: { _created: -1 },
    limit: postsPerPage,
    skip: page ? (Number(page) - 1) * postsPerPage : 0,
    populate: 1,
  };

  if (limit) query.limit = limit;
  if (skip) query.skip = skip;

  const data: Entries = await fetchAPI(query);

  return data?.entries;
};
