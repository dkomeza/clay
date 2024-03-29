import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true,
    port: 3000,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": "/src",
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },
});
