module.exports = {
  extends: ["eslint-config-rapid7/rules/node"].map(require.resolve),
  env: {
    browser: false,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  }
};
