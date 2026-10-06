import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Posts are plain markdown in src/content/blog. Extra frontmatter from the old site is allowed and ignored.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z
    .object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    })
    .passthrough(),
});

export const collections = { blog };
