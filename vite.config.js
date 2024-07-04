import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
    plugins: [[Inspect()], [injectHTML()]],
    base: "/finity-nft/",
    resolve: {
        alias: [
            {
                find: "@jsBase",
                replacement: fileURLToPath(new URL("./src/js/base", import.meta.url)),
            },
            {
                find: "@jsToken",
                replacement: fileURLToPath(new URL("./src/js/token-page", import.meta.url)),
            },
            {
                find: "@jsMain",
                replacement: fileURLToPath(new URL("./src/js/main-page", import.meta.url)),
            },
        ],
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve("__dirname", "../index.html"),
                fund_page: resolve("__dirname", "../src/pages/page-fund.html"),
                token_page: resolve("__dirname", "../src/pages/page-token.html"),
                404: resolve("__dirname", "../404.html"),
            },
        },
    },
});
