import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  //deploy
  // base: "/umak-clone/",
  plugins: [react()],
});
