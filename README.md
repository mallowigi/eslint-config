# eslint-config-mallowigi

> A highly opinionated, [sharable config](http://eslint.org/docs/developer-guide/shareable-configs.html) of [ESLint](http://eslint.org) rules to produce beautiful, readable JavaScript.

As developers, we spend more time reading code than writing it. These rules aim to make reading JavaScript a priority.

That means some rules will feel oppressive or "over the top" for many developers, which is fine. If you don't like it, you can get off my lawn! ... Or extend
the rules and override them with the ones that bother you. Either way. 😊

This config also comes with the following plugins, and corresponding rules, baked in.

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)
- [eslint-plugin-i18n-json](https://www.npmjs.com/package/eslint-plugin-i18n-json)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-lodash](https://www.npmjs.com/package/eslint-plugin-lodash)
- [eslint-plugin-mdx](https://www.npmjs.com/package/eslint-plugin-mdx)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-react-i18n](https://www.npmjs.com/package/eslint-plugin-react-i18n)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)
- [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-sort-keys-fix](https://www.npmjs.com/package/eslint-plugin-sort-keys-fix)
- [eslint-plugin-typescript-sort-keys](https://www.npmjs.com/package/eslint-plugin-typescript-sort-keys)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

Each and every single rule has been meticulously poured over and purposefully hand picked or excluded.

## Install

```
$ npm install -D eslint @mallowigi/eslint-config
```

## Usage

Create an ESLint config in your `package.json` or `.eslintrc.js` file.

### package.json

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "extends": "@mallowigi/eslint-config",
    "rules": {
      // enable additional rules, override rule options, or disable rules
    }
  }
}
```

### .eslintrc.js

```js
module.exports = {
  extends: '@mallowigi/eslint-config',
  rules: {
    // enable additional rules, override rule options, or disable rules
  },
};
```

Once your rules are configured, we recommend running the following command in your `package.json` as
an [npm script](https://docs.npmjs.com/cli/v7/using-npm/scripts).

```
eslint . --ext .js --ext .json
```

## Usage With Prettier

Love this config? Love [prettier](https://prettier.io/)? Well you're in luck!

This config will automatically detect if your project is using prettier and it will
apply [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with prettier.

## Related

- [prettier-config-get-off-my-lawn](https://www.npmjs.com/package/prettier-config-get-off-my-lawn) - A highly
  opinionated, [sharable config](https://prettier.io/docs/en/configuration.html#sharing-configurations) of Prettier rules to produce beautiful, readable code.
- [stylelint-config-get-off-my-lawn](https://www.npmjs.com/package/stylelint-config-get-off-my-lawn) - A highly
  opinionated, [sharable config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends)
  of [stylelint](http://stylelint.io) rules to produce beautiful, readable CSS and Sass.

## License

MIT © Elior Boukhobza "Mallowigi".
