import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,

  prettier,

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        ...globals.es2021,
        $: 'readonly',
        $$: 'readonly',
        browser: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },

  {
    ignores: [
      'node_modules/',
      'logs/',
      'allure-results/',
      'allure-report/',
      'coverage/',
      '*.config.js',
    ],
  },
];
