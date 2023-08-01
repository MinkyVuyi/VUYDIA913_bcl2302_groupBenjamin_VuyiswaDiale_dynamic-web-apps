import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add your custom aliases here
      // For example:
      // '@components': '/src/components',
      // '@utils': '/src/utils',
      // '@styles': '/src/styles',
    },
  },
});
