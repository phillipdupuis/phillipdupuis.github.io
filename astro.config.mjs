// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), tailwind({ applyBaseStyles: false })],
  site: "https://phillipdupuis.github.io",
});
