import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ceptresound.com',
  integrations: [sitemap()],
  build: {
    // The whole site's CSS gzips to ~2 KB — inlining it into every page
    // removes the render-blocking stylesheet request from the critical path,
    // which outweighs losing cross-page caching at this size.
    inlineStylesheets: 'always',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});