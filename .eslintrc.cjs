/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-namespace-import/recommended",
    "@rocketseat/eslint-config/react",
  ],
  globals: { JSX: true },
  env: { browser: true, es2020: true },
  plugins: ["@typescript-eslint/eslint-plugin", "react-refresh"],
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react-namespace-import/no-namespace-import": "error",
    "no-unused-expressions": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};