// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
  printWidth: 150,
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-organize-imports"],
};

module.exports = config;
