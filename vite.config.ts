import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages.
//
// TanStack Start's `spa` mode produces a single static `index.html` shell that
// the client app hydrates on the browser, plus the usual `assets/` chunks.
// `maskPath: "/"` writes the shell to `dist/client/index.html` so GitHub Pages
// can serve it directly. We still go through Nitro because the Lovable wrapper
// requires it, but the deployable output lives in `dist/client`.
export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
    pages: [],
  },
  nitro: true,
});
