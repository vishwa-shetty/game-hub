import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // or 'node' based on your testing needs
    globals: true, // If you want to use global variables like describe, it, etc.
    setupFiles: "/tests/setup.ts",
  },
});
