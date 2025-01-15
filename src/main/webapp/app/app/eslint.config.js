import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        globals,
        ...pluginJs.configs.browser,
        // Add any other globals if needed
      },
    },
  },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,   
          allowTernary: true,       
          allowTaggedTemplates: true, 
        },
      ],
    },
  },
  tseslint.configs.recommended,
];
