// vite.config.ts
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    plugins: [
        [Inspect()],
        [injectHTML()],
        [
            ViteImageOptimizer({
                jpg: {
                    quality: 40,
                },
                png: {
                    quality: 40,
                },
            }),
        ],
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                d: resolve(__dirname, "src/html/d.html"),
            },
        },
    },
});
