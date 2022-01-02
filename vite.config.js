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
  },
})
