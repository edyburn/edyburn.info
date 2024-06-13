import { defineConfig } from "astro/config";

import icon from "astro-icon";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  server: { host: true },
  site: "https://keith.edyburn.info",
  integrations: [icon()],
  markdown: {
    remarkPlugins: [remarkToc],
  },
});
