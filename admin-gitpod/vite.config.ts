import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const hostUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [`${hostUrl}`],
  },
  base: "./",
});
