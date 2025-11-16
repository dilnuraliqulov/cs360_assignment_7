// @ts-check

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
    }
  }
]);
