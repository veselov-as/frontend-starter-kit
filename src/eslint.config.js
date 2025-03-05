import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'

import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

const typeScriptExtensions = ['.ts', '.cts', '.mts', '.tsx']

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['dist', 'node_modules', 'eslint.config.js'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSortPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
      'import/parsers': {
        '@typescript-eslint/parser': typeScriptExtensions,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs.flat['jsx-runtime'].rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'array-callback-return': ['error', { checkForEach: true }],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'prettier/prettier': 'error',
      'linebreak-style': 'off',
      'no-else-return': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'no-param-reassign': 'error',
      'no-restricted-globals': 'error',
      'no-return-await': 'error',
      'no-underscore-dangle': 'error',
      'no-unneeded-ternary': 'error',
      'nonblock-statement-body-position': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'quote-props': ['error', 'as-needed'],
      quotes: ['error', 'single'],
      'template-curly-spacing': 'error',
      radix: 'error',
      'wrap-iife': 'error',

      'react/prop-types': 'off',
      'react/button-has-type': 'warn',
      'react/jsx-boolean-value': ['error', 'always'],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-fragments': 'error',
      'react/jsx-no-constructed-context-values': 'warn',
      'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce', 'ternary'] }],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          reservedFirst: true,
          noSortAlphabetically: true,
        },
      ],
      'react/self-closing-comp': 'error',
      'react/no-unknown-property': ['error', { ignore: ['transform-origin'] }],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
      ],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/prefer-regexp-exec': 'warn',
      '@typescript-eslint/require-array-sort-compare': 'warn',
      '@typescript-eslint/switch-exhaustiveness-check': 'warn',
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNever: true }],

      'no-restricted-imports': ['error', '.', '..'],

      'import/no-internal-modules': [
        'error',
        {
          allow: [
            'react-dom/client',
            '@consta/uikit/[a-zA-Z]*',
            '@consta/icons/[a-zA-Z]*',
            'assets/*',
            '__generated__/*',
          ],
        },
      ],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
          svg: 'always',
        },
      ],
      'import/no-unused-modules': ['warn'],
      'import/no-mutable-exports': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/no-duplicates': 'error',
    },
  },
]
