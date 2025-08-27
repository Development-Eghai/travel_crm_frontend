import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/my-vite-app/",
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/material', '@mui/x-data-grid']
  }
});