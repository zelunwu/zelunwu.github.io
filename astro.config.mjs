import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zelunwu.github.io',
  output: 'static',
  build: { format: 'directory' },
});
