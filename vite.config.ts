import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages.
// - tanstackStart.prerender renders the home route (and any pages it links to)
//   into static HTML so an index.html exists at the site root.
// - nitro preset "static" emits a plain static site (no Worker bundle).
// - Output goes to ./dist/client to match the GitHub Pages workflow upload path.
export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [{ path: "/" }],
  },
  nitro: {
    preset: "static",
    output: {
      dir: "dist",
      publicDir: "dist/client",
    },
  },
});
