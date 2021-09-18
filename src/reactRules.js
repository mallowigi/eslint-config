/* eslint-disable @typescript-eslint/no-magic-numbers */
export const reactRules = {
  'react/button-has-type': 'error',
  'react/destructuring-assignment': 'error',
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-child-element-spacing': 'error',
  'react/jsx-closing-bracket-location': 'error',
  'react/jsx-closing-tag-location': 'error',
  'react/jsx-curly-brace-presence': [
    'error',
    {
      children: 'never',
      props: 'never',
    },
  ],
  'react/jsx-curly-newline': ['error', 'consistent'],
  'react/jsx-curly-spacing': [
    'error',
    {
      when: 'never',
    },
  ],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-handler-names': 'error',
  'react/jsx-indent': ['error', 2],
  'react/jsx-indent-props': ['error', 2],
  'react/jsx-max-depth': [
    'error',
    {
      max: 5,
    },
  ],
  'react/jsx-max-props-per-line': [
    'error',
    {
      maximum: 1,
      when: 'always',
    },
  ],
  'react/jsx-newline': 'error',
  'react/jsx-no-bind': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-literals': 'off',
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-target-blank': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-one-expression-per-line': [
    'error',
    {
      allow: 'single-child',
    },
  ],
  'react/jsx-pascal-case': 'error',
  'react/jsx-props-no-multi-spaces': 'error',
  'react/jsx-props-no-spreading': 'error',
  'react/jsx-sort-default-props': 'error',
  'react/jsx-sort-props': 'error',
  'react/jsx-space-before-closing': 'error',
  'react/jsx-wrap-multilines': 'error',
  'react/no-access-state-in-setstate': 'error',
  'react/no-did-mount-set-state': 'error',
  'react/no-did-update-set-state': 'error',
  'react/no-direct-mutation-state': 'error',
  'react/no-multi-comp': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-render-return-value': 'error',
  'react/no-unused-state': 'error',
  'react/no-will-update-set-state': 'error',
  'react/prefer-stateless-function': 'warn',
  'react/react-in-jsx-scope': 'off',
  'react/self-closing-comp': 'error',
  'react/state-in-constructor': ['error', 'never'],
};
