import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  server: { host: true },
  site: "https://keith.edyburn.info",
  integrations: [icon(), mdx()],
  markdown: {
    remarkPlugins: [remarkToc],
  },
});
