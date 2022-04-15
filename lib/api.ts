import { Entries } from "../types/cockpit";

const API_URL = process.env.COCKPIT_POSTS_URL;

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

export const getAllPosts = async () => {
  const data: Entries = await fetchAPI({
    filter: { published: true },
    limit: 3,
    sort: { date_published: -1 },
    populate: 1,
  });

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
