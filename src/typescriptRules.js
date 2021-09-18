/* eslint-disable @typescript-eslint/no-magic-numbers,unicorn/prefer-module */
module.exports = {
  // add here if necessary
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/ban-types': 'error',
  '@typescript-eslint/brace-style': 'error',
  '@typescript-eslint/class-literal-property-style': 'error',
  '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
  '@typescript-eslint/comma-spacing': 'error',
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'explicit',
    },
  ],
  '@typescript-eslint/func-call-spacing': 'error',
  '@typescript-eslint/keyword-spacing': 'error',
  '@typescript-eslint/lines-between-class-members': 'error',
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    },
  ],
  '@typescript-eslint/member-ordering': 'error',
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/naming-convention': 'error',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-base-to-string': 'warn',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'error',
  '@typescript-eslint/no-dupe-class-members': 'error',
  '@typescript-eslint/no-duplicate-imports': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extra-semi': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-floating-promises': 'warn',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-invalid-this': 'off',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-magic-numbers': [
    'warn',
    {
      enforceConst: true,
      ignore: [
        1,
        0,
        -1,
        2,
      ],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
    },
  ],
  '@typescript-eslint/no-meaningless-void-operator': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-parameter-properties': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  '@typescript-eslint/no-shadow': [
    'error',
    {
      hoist: 'all',
    },
  ],
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-throw-literal': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/no-unused-expressions': 'warn',
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  '@typescript-eslint/object-curly-spacing': ['error', 'always'],
  '@typescript-eslint/padding-line-between-statements': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/quotes': [
    'error',
    'single',
    {
      avoidEscape: true,
    },
  ],
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/restrict-plus-operands': 'off',
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/return-await': 'error',
  '@typescript-eslint/semi': ['error', 'always'],
  '@typescript-eslint/sort-type-union-intersection-members': 'error',
  '@typescript-eslint/space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    },
  ],
  '@typescript-eslint/space-infix-ops': 'error',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/switch-exhaustiveness-check': 'warn',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/unbound-method': 'error',
  '@typescript-eslint/unified-signatures': 'error',
};
