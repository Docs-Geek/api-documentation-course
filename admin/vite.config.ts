import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
      cors: {
        origin: '*',
        credentials: true,
      },
      host: true,  // if you also need it accessible via network/codespace public URL
    },
    base: './',
  })