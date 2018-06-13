module.exports = {
  extends: ['eslint-config-rapid7/base', 'eslint-config-rapid7/rules/browser'].map(require.resolve),
  env: {
    amd: false,
    browser: true,
    es6: true,
    jasmine: false,
    mocha: false,
    node: false,
  },
  globals: {
    global: true,
    window: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
};
