module.exports = {
  extends: ['./base', './rules/browser'].map(require.resolve),
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
