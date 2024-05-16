// vite.config.ts
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import injectHTML from "vite-plugin-html-inject";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    plugins: [
        [Inspect()],
        [injectHTML()],
        [
            ViteImageOptimizer({
                jpg: {
                    quality: 90,
                },
                png: {
                    quality: 80,
                },
                webp: {
                    lossless: false,
                },
                gif: {},
            }),
        ],
    ],
    base: "/finity-nft/",
});
