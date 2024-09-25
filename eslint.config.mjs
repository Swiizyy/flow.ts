import pluginJs from "@eslint/js";
import tailwind from "eslint-plugin-tailwindcss";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  // Typescript
  ...tseslint.configs.recommended,
  // Tailwind
  ...tailwind.configs["flat/recommended"],
  // Vue
  ...pluginVue.configs["flat/recommended"],
  // Rules config
  {
    rules: {
      'vue/singleline-html-element-content-newline': 'error',
      "vue/require-default-prop": 0,
      "vue/multi-word-component-names": 0,
      "@typescript-eslint/ban-types": 0,
      "tailwindcss/no-custom-classname": 0,
      "@typescript-eslint/no-unused-vars": [
        1,
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "props",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {},
  // Ignore files
  {
    ignores: ["tailwind.config.js", "nuxt.config.ts", "*.js"],
  },
);
