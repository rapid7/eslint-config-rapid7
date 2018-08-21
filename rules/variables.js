module.exports = {
  rules: {
    'no-catch-shadow': 2,
    'no-label-var': 2,
    'no-delete-var': 2,
    'no-undef-init': 2,
    'no-unused-vars': [
      1,
      {
        args: 'after-used',
        argsIgnorePattern: '[iI]gnored',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '[iI]gnored',
      },
    ],
    'no-use-before-define': 2,
    'no-var': 2,
  },
};
