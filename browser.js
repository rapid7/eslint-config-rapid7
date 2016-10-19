'use strict';

module.exports = {
  extends: [
    'eslint-config-rapid7/rules/browser',
    'eslint-config-rapid7/rules/react',
    'eslint-config-rapid7/base'
  ].map(require.resolve),
  env: {
    browser: true,
    node: false,
    amd: false,
    mocha: false,
    jasmine: false
  }
};
