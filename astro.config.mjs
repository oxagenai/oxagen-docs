import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Oxagen Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/oxagenai/oxagen-docs",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            { label: "Getting Started", slug: "guides/getting-started" },
            { label: "Installation", slug: "guides/installation" },
          ],
        },
        {
          label: "API Reference",
          items: [
            { label: "Overview", slug: "api/overview" },
            { label: "Authentication", slug: "api/authentication" },
            { label: "Endpoints", slug: "api/endpoints" },
          ],
        },
      ],
    }),
  ],
});
