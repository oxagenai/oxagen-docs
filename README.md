# Oxagen Docs

The official documentation site for the Oxagen platform, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
└── content/
    └── docs/
        ├── index.mdx          # Landing page
        ├── guides/
        │   ├── getting-started.md
        │   └── installation.md
        └── api/
            ├── overview.md
            ├── authentication.md
            └── endpoints.md
```

## Adding Content

Create new `.md` or `.mdx` files in the `src/content/docs/` directory. Each file needs frontmatter with at least a `title`:

```md
---
title: My New Page
description: A description for search engines and social sharing.
---

Your content here.
```

Update `astro.config.mjs` to add the new page to the sidebar navigation.
