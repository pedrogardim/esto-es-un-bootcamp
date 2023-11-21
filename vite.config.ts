import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        entryFileNames: "main.js",
      },
    },
    copyPublicDir: false,
  },
});
