module.exports = {
  rules: {
    'no-catch-shadow': 2,
    'no-label-var': 2,
    'no-delete-var': 2,
    'no-undef-init': 2,
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        varsIgnorePattern: 'React|[iI]gnored',
      },
    ],
    'no-use-before-define': 2,
    'no-var': 2,
  },
};
