const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                tatcasanpham: resolve(__dirname, "tatcasanpham.html"),
                giohang: resolve(__dirname, "giohang.html"),
                thanhtoan: resolve(__dirname, "thanhtoan.html"),
                chitiet: resolve(__dirname, "chitiet.html"),
            },
        },
    },
});
