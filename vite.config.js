import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  base: './',                  // 👈 1. Fixes asset paths in production
  build: {
    outDir: 'dist',            // 👈 2. Explicitly set output folder (optional but recommended)
    emptyOutDir: true,         // Clears the dist folder on each build
  }
});