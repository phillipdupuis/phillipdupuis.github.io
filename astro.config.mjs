// @ts-check
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), tailwind({ applyBaseStyles: false })],
  site: "https://phillipdupuis.github.io",
  vite: {
    plugins: [yaml()],
  },
});
