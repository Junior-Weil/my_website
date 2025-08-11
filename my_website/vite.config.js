import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my_website/',
  build: { assetsInlineLimit: 0 },

  define: {
    'import.meta.env.TS_BASE_URL': JSON.stringify('/my_website'),
  },
});
