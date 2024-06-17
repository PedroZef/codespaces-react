import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  trailingComma: "none",
  tabWidth: 4,
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
