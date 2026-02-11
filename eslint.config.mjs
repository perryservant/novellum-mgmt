import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
    globalIgnores(["node_modules", "dist", "build", "coverage", "**/node_modules"]),
    // Backend + shared
    {
        files: ["backend/**/*.ts", "shared/**/*.ts"],
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: { ...globals.node },
            parserOptions: { tsconfigRootDir: __dirname }
        },
        plugins: { prettier: prettierPlugin },
        rules: { "prettier/prettier": "error" }
    },
    // Frontend (React)
    {
        files: ["frontend/**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: { tsconfigRootDir: path.join(__dirname, "frontend") }
        },
        plugins: { prettier: prettierPlugin },
        rules: { "prettier/prettier": "error" }
    },
    eslintConfigPrettier
]);
