import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ykliao.com",
  trailingSlash: "never",
  // emit /projects.html rather than /projects/index.html so Netlify serves /projects without a slash redirect
  build: { format: "file" },
  markdown: { shikiConfig: { themes: { light: "github-light", dark: "github-dark" } } },
});
