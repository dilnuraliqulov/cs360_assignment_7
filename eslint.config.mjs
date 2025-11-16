// eslint.config.mjs
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS recommended rules
  eslint.configs.recommended,

  // TS ESLint recommended rules
  ...tseslint.configs.recommended,

  // Custom config for TS files
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  // Allow Node globals for config files
  {
    files: [
      ".prettierrc.js",
      "jest.config.js",
      "*.config.js",
      "**/*.config.js",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script", // allow module.exports
      globals: {
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "no-undef": "off",
    },
  },
]);
