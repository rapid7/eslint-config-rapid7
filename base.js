'use strict';

module.exports = {
  extends: [
      'eslint-config-rapid7/legacy',
      'eslint-config-rapid7/rules/es6'
  ].map(require.resolve)
};
