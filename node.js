'use strict';

module.exports = {
  extends: [
    'eslint-config-rapid7/rules/node',
    'eslint-config-rapid7/base'
  ].map(require.resolve),
  env: {
    browser: false,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  }
};
