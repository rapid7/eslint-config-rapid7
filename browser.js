module.exports = {
  extends: ['eslint-config-rapid7/base', 'eslint-config-rapid7/rules/browser'].map(require.resolve),
  env: {
    browser: true,
    node: false,
    amd: false,
    mocha: false,
    jasmine: false,
  },
};
