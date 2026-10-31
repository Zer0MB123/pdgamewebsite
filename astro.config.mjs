import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://primedomination.online",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
