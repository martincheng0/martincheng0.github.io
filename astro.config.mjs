import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: `https://${import.meta.env.USERNAME_GITHUB}.github.io`,
  integrations: [tailwind()],
});
