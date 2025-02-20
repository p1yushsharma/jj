// eslint.config.js
module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
      tsconfigRootDir: '.',
    },
    plugins: ['@typescript-eslint', 'import', 'prettier', 'jest'],
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      'prettier/prettier': 'warn',
      'no-console': 'warn',
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
    overrides: [
      {
        files: ['*.spec.ts', '*.test.ts'],
        env: {
          jest: true,
        },
      },
    ],
  };
  