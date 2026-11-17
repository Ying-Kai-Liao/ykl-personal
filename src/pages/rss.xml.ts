import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import config from "@/config/config.json";

export async function GET(context: { site: string }) {
  const posts = await getCollection("blog");
  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: context.site,
    items: posts
      .filter((post) => !post.data.draft && post.id !== "-index")
      .sort(
        (a, b) =>
          new Date(b.data.date ?? 0).getTime() -
          new Date(a.data.date ?? 0).getTime(),
      )
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/blog/${post.id}`,
      })),
  });
}
