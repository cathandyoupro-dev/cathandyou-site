import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages.
//
// We disable Nitro entirely and use TanStack Start's built-in SPA mode +
// prerenderer to emit a static `index.html` (the SPA shell) plus the usual
// `assets/` chunks into `dist/client`. GitHub Pages serves this directly.
export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
  },
  nitro: false,
});
