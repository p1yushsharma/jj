export const env = {
  browser: true,
  es2021: true,
  node: true,
};
export const parser = '@typescript-eslint/parser';
export const parserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
};
export const plugins = [
  '@typescript-eslint',
  '@angular-eslint', // Remove the 'rxjs' plugin if you're not using it
];
export const overrides = [
  {
    files: ['*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
