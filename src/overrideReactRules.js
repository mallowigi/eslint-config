/* eslint-disable unicorn/prefer-module */
module.exports = [
  {
    files: ['*.{jsx,tsx}'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/restrict-plus-operands': 'error',
      'arrow-parens': 'off',
      'func-style': 'error',
    },
  },
];
