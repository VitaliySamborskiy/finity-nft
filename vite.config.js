// vite.config.ts
import { resolve } from "path";
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
                    quality: 80,
                },
                png: {
                    quality: 75,
                },
                webp: {
                    lossless: false,
                },
            }),
        ],
    ],
    base: "/finity-nft/",
    build: {
        rollupOptions: {
            input: {
                main: resolve("__dirname", "../index.html"),
                fund_page: resolve("__dirname", "../src/pages/page-fund.html"),
                token_page: resolve("__dirname", "../src/pages/token_page.html"),
            },
        },
    },
});
