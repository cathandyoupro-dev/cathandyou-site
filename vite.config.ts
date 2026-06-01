import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages.
// We keep the default Cloudflare nitro preset (used by Lovable) but enable
// TanStack Start prerendering so an index.html is emitted into dist/client.
// The GitHub Pages workflow only uploads dist/client, so the Worker bundle
// produced alongside is harmless and ignored.
export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [{ path: "/" }],
  },
  nitro: true,
});
