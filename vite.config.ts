import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/game-over/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Moves React and ReactDOM to a separate chunk
          ui: ["./src/pages/GameDetailsPage", "./src/components/game/GameCard"], // Example grouping for heavy UI components
        },
      },
    },
    chunkSizeWarningLimit: 600, // Optional: Adjust warning limit
  },
});
