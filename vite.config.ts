import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages.
//
// When deployed to a project page (https://<user>.github.io/<repo>/), assets
// must be served from the repo subpath. The workflow sets BASE_PATH from
// GITHUB_REPOSITORY so the same config works locally and on Pages.
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
    router: {
      basepath: basePath,
    },
  },
  nitro: false,
});
