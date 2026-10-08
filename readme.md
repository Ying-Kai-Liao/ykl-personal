# ykliao.netlify.app

Personal site and blog of Kai Liao. Plain [Astro](https://astro.build), no CSS framework; deployed on Netlify.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

- **Posts**: `src/content/blog/*.md`. Frontmatter needs `title` and `date`; `description`, `tags`, `image` and `draft` are optional. They appear on `/blog`, the home page and `/rss.xml`.
- **Projects**: `src/data/projects.ts` drives both the home carousel and `/projects`.
- **Carousel objects**: `src/components/objects/<slug>.astro`, one per project. They are built and tested as standalone pages in the private `yk-site` repo (`objects/<slug>/`) and copied over with `python3 scripts/import-object.py <slug>`.
- **Hero**: `public/heroes/matcha.html` (plus its cello samples in `public/heroes/cello/`), loaded into a frame by `src/components/HeroSwitcher.astro`. List another scene there and switcher arrows appear.
- **Old template URLs** are redirected in `public/_redirects`.
