module.exports = {
  extends: ['eslint-config-rapid7/base', 'eslint-config-rapid7/rules/node'].map(require.resolve),
  env: {
    amd: false,
    browser: true,
    es6: true,
    jasmine: false,
    mocha: false,
    node: false,
  },
  globals: {
    __dirname: true,
    Buffer: true,
    global: true,
    module: true,
    process: true,
    require: true,
    setImmediate: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
};
