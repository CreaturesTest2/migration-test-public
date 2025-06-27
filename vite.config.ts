import { defineConfig } from 'vite';

export default defineConfig({
  base: '/migration-test-public/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
