/* eslint-disable unicorn/prefer-module,@typescript-eslint/no-var-requires */
// This is a workaround for: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

const dotProp = require('dot-prop');
const findUp = require('find-up');
const readPkgUp = require('read-pkg-up');
const semver = require('semver');

const eslintRules = require('./src/eslintRules');
const i18nRules = require('./src/i18nRules');
const importRules = require('./src/importRules');
const lodashRules = require('./src/lodashRules');
const mdxRules = require('./src/mdxRules');
const overrideReactRules = require('./src/overrideReactRules');
const overrideTSRules = require('./src/overrideTSRules');
const prettierRules = require('./src/prettierRules');
const promiseRules = require('./src/promiseRules');
const reactRules = require('./src/reactRules');
const securityRules = require('./src/securityRules');
const simpleImportsRules = require('./src/simpleImportsRules');
const sonarRules = require('./src/sonarRules');
const typescriptRules = require('./src/typescriptRules');
const unicornRules = require('./src/unicornRules');


const packageJson = readPkgUp.sync() ?? {};

const packageJsonContains = dependency =>
  dotProp.get(packageJson, `packageJson.dependencies.${dependency}`) ||
  dotProp.get(packageJson, `packageJson.devDependencies.${dependency}`);

const usesBabelConfig = findUp.sync([
  '.babelrc',
  '.babelrc.json',
  'babel.config.json',
]);
const usesPrettier = packageJsonContains('prettier');
const usesReact = packageJsonContains('react');
const usesI18n = packageJsonContains('i18next');
const usesI18nReact = packageJsonContains('react-i18n');
const usesTypeScript = packageJsonContains('typescript');
const usesMdx = packageJsonContains('mdx');
const usesLodash = packageJsonContains('lodash');
const reactVersion = usesReact ? semver.coerce(usesReact).version : undefined;

const config = {
  env: {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': true,
    'shared-node-browser': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
  ],
  overrides: [],
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2021,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'simple-import-sort',
    'security',
    'promise',
    'sonarjs',
    'unicorn',
    'sort-keys-fix',
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    ...eslintRules,
    ...importRules,
    ...simpleImportsRules,
    ...promiseRules,
    ...securityRules,
    ...sonarRules,
    ...unicornRules,
  },
  settings: {},
};

if (usesI18n) {
  config.plugins.push('i18n-json');
  config.extends.push('plugin:i18n-json/recommended');
  config.rules = {
    ...config.rules,
    ...i18nRules,
  };
}

if (usesReact) {
  dotProp.set(config, 'parserOptions.ecmaFeatures.jsx', true);
  dotProp.set(config, 'settings.react.version', 'detect');
  config.extends.push('plugin:react/recommended');
  config.plugins.push('react');
  config.rules = {
    ...config.rules,
    ...reactRules,
  };
  config.overrides.push(...overrideReactRules);

  if (semver.gte(reactVersion, '16.8.0')) {
    config.plugins.push('react-hooks');
    config.extends.push('plugin:react-hooks/recommended');
  }

  config.plugins.push('jsx-a11y');
  config.extends.push('plugin:jsx-a11y/recommended');

  if (usesI18nReact) {
    config.plugins.push('react-i18n');
    config.extends.push('plugin:react-i18n/recommended');
  }
}

if (usesTypeScript) {
  dotProp.set(config, 'parser', '@typescript-eslint/parser');
  dotProp.set(config, 'parserOptions.project', 'tsconfig.json');
  config.extends.push(
    'plugin:flowtype/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:typescript-sort-keys/recommended',
  );
  config.plugins.push('flowtype', '@typescript-eslint', 'typescript-sort-keys');
  config.rules = {
    ...config.rules,
    ...typescriptRules,
  };
  config.overrides.push(...overrideTSRules);

}

if (usesBabelConfig) {
  dotProp.set(config, 'parserOptions.babelOptions.configFile', usesBabelConfig);
  dotProp.set(config, 'parserOptions.requireConfigFile', true);
} else if (usesReact) {
  dotProp.set(config, 'parserOptions.babelOptions.presets', ['@babel/preset-react']);
}

if (usesPrettier) {
  config.plugins.push('prettier');
  config.extends.push('plugin:prettier/recommended');
  config.rules = {
    ...config.rules,
    ...prettierRules,
  };
}

if (usesLodash) {
  config.plugins.push('lodash');
  config.extends.push('plugin:lodash/recommended');

  config.rules = {
    ...config.rules,
    ...lodashRules,
  };
}

if (usesMdx) {
  config.plugins.push('mdx');
  config.extends.push('plugin:mdx/recommended');

  config.rules = {
    ...config.rules,
    ...mdxRules,
  };
}

module.exports = config;
