/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const { defineConfig } = require("vite")

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      formats: ["es", "cjs"],
      name: "xhtml2pug",
      fileName: (format) => `main.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["hyntax", "@vue/compiler-dom", "html-entities"],
    },
  },
})
