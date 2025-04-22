import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

const hostUrl = process.env.VITE_REACT_APP_HOST_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: hostUrl ? [hostUrl] : [],
  },
  base: "./",
});
