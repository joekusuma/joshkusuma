import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jbkusuma.art',
  build: { inlineStylesheets: 'auto' },
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
