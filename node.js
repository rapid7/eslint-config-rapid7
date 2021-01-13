module.exports = {
  extends: ['./base', './rules/node'].map(require.resolve),
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
