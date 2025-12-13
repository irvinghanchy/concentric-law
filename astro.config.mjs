// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 設定 GitHub Pages 網址
  site: 'https://irvinghanchy.github.io',
  base: '/concentric-law',
  vite: {
    plugins: [tailwindcss()]
  },
});

