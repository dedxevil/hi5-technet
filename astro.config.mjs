import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://dedxevil.github.io/hi5-technet",
  integrations: [tailwind({ configFile: "./tailwind.config.mjs" })],
});
