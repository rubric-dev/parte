import { defineConfig } from "tsup";

export default defineConfig({
  // Add this
  esbuildOptions(options) {
    options.external = ["@emotion/*"];
  },
});
