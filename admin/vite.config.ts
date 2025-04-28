import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
      cors: {
        origin: 'https://potential-orbit-4qxjp4ggvw5c7wr7-5173.app.github.dev',
        credentials: true,
      },
      host: true,  // if you also need it accessible via network/codespace public URL
    },
    base: './',
  })