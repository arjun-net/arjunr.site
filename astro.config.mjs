import { defineConfig } from "astro/config";

// Served at the custom domain arjunr.site (see public/CNAME).
// A custom domain is served at the root, so `base` stays unset.
export default defineConfig({
  site: "https://arjunr.site",
});
