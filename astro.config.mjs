import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cole.ooo',
  markdown: {
    shikiConfig: {
      theme: 'light-plus',
    },
  },
});
