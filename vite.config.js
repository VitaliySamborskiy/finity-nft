import { resolve } from "path";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
    plugins: [[Inspect()], [injectHTML()]],
    base: "/finity-nft/",
    resolve: {
        alias: {
            "@jsBase": resolve(__dirname, "./src/js/base"),
            "@jsToken": resolve(__dirname, "./src/js/token-page"),
            "@jsMain": resolve(__dirname, "./src/js/main-page"),
        },
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
