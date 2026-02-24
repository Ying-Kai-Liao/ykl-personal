# YK Liao - Personal Site

Personal site and blog built with Astro + Tailwind CSS. Based on [Astroplate](https://github.com/zeon-studio/astroplate).

## Quick Start

```bash
bun install
bun run dev       # dev server at localhost:4321
bun run build     # production build
bun run preview   # preview production build
```

## Project Structure

```
src/
├── config/                  # Site settings
│   ├── config.json             Site title, SEO, features
│   ├── i18n.json               EN / ZH-TW translations
│   ├── menu.json               Navigation links
│   ├── social.json             Social media links
│   └── theme.json              Colors, fonts
│
├── content/                 # All content lives here
│   ├── homepage/-index.md      Homepage intro + projects
│   ├── about/-index.md         About page
│   ├── blog/                   Blog posts (add .md files here)
│   │   └── -index.md
│   ├── authors/yk-liao.md      Author profile
│   ├── contact/-index.md       Contact page
│   └── pages/                  Static pages
│
├── pages/                   # Route templates (rarely need editing)
├── layouts/                 # Layout components
│   └── components/
│       ├── LanguageSwitcher.astro
│       └── ThemeSwitcher.astro
└── content.config.ts        # Content schemas

public/images/
├── profile/                 # Your photos & avatar
│   ├── avatar-yk.png           Logo + author image
│   ├── yk-2025.jpg             Homepage portrait
│   ├── ustart-speaking.jpg     About page photo
│   └── ustart-award.jpg        Available for use
├── projects/                # Project screenshots
├── meta/                    # Favicon, OG image
│   ├── favicon.png
│   └── og-image.png
└── (blog images go here or in subfolders)
```

## Common Tasks

### Write a blog post

Create `src/content/blog/my-post.md`:

```markdown
---
title: "My Post Title"
description: "A short description"
date: 2026-02-25
author: "YK Liao"
categories: ["Technology"]
tags: ["astro", "webdev"]
image: "/images/my-post-cover.jpg"
draft: false
---

Your content here...
```

### Edit homepage content

Edit `src/content/homepage/-index.md` to change:
- Banner title and intro text
- Featured projects (title, description, tags, link)

### Edit about page

The about page is templated in `src/pages/about.astro` with `data-i18n` attributes for bilingual support. Update both the template and `src/config/i18n.json` when changing content.

### Update translations

Edit `src/config/i18n.json`. Both `en` and `zh-TW` keys must match. The language switcher in the header toggles between them client-side.

### Add images

- Profile/avatar photos: `public/images/profile/`
- Project screenshots: `public/images/projects/`
- Blog post images: `public/images/` or a subfolder
- Reference in content as `/images/profile/photo.jpg`

### Change navigation

Edit `src/config/menu.json`. Add `i18nKey` for translated labels.

### Change social links

Edit `src/config/social.json`. Icons are from `react-icons/fa6`.
