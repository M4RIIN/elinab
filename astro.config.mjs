// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://m4riin.github.io/elinab',
  base: isProd ? '/' : '/',
  integrations: [tailwind()],
});
