'use strict';

module.exports = {
  extends: [
      'eslint-config-rapid7/rules/react',
      'eslint-config-rapid7/base'
  ].map(require.resolve)
};
