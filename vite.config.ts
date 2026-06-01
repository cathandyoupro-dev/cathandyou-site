// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages:
// - tanstackStart.prerender enables prerendering of all static (non-dynamic) routes,
//   so an index.html is emitted at the site root.
// - nitro preset "static" produces a plain static site (no Worker bundle).
// - Output is written to ./dist/client to match the GitHub Pages workflow.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      retryCount: 2,
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
