import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// IMPORTANT: Replace this with your real custom domain before publishing.
// Example: https://primedomination.com
export default defineConfig({
  site: "https://YOUR-DOMAIN.com",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
