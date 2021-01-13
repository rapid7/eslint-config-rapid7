module.exports = {
  extends: [
    './rules/best-practices',
    './rules/style',
    './rules/variables',
    './rules/import',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
};
