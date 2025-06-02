import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ADD THIS LINE - fixes asset paths for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});