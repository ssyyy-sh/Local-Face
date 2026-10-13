import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves the site from /Local-Face/
  base: process.env.GITHUB_PAGES ? '/Local-Face/' : '/',
  plugins: [react()],
});
