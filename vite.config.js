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
                    quality: 70,
                },
                png: {
                    quality: 70,
                },
                webp: {
                    lossless: true,
                },
            }),
        ],
    ],
    base: "/finity-nft/",
});
