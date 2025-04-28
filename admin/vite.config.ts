import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
      cors: {
        origin: 'https://upgraded-waffle-6vj9x6rr4jp25pr6-5173.app.github.dev',
        credentials: true,
      },
      host: true,  // if you also need it accessible via network/codespace public URL
    },
    base: './',
  })