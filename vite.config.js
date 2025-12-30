import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/job-portal/",
  resolve: {
    alias: {
      'k-convert': path.resolve(__dirname, 'node_modules/k-convert'),
      base: "/abu-job-portal"
    },
  },
});