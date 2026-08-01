import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// dexa.art/vfx — GitHub Pages subdirectory deploy
export default defineConfig({
  base: '/vfx/',
  plugins: [react()],
  build: {
    target: 'es2022',
  },
});
