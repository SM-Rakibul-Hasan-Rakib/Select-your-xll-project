import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // <-- This is the missing line
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
