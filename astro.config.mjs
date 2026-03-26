// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
const site = process.env.SITE_URL || 'https://www.elinabesthetique.fr';

export default defineConfig({
  site,
  base: '/',
  integrations: [tailwind()],
});
