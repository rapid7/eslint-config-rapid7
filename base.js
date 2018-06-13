module.exports = {
  extends: [
    'eslint-config-rapid7/rules/best-practices',
    'eslint-config-rapid7/rules/style',
    'eslint-config-rapid7/rules/variables',
    'eslint-config-rapid7/rules/import',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
};
