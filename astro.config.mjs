import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ykliao.com",
  trailingSlash: "never",
  markdown: { shikiConfig: { themes: { light: "github-light", dark: "github-dark" } } },
});
