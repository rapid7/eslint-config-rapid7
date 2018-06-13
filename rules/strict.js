module.exports = {
  rules: {
    'max-depth': [1, 1],
    'max-statements': [1, 25],
    'no-magic-numbers': [
      2,
      {
        enforceConst: true,
        ignoreArrayIndexes: true,
      },
    ],
    'one-var': [2, 'never'],
    'sort-keys': [2, 'asc', {caseSensitive: false, natural: true}],
    'valid-jsdoc': [
      1,
      {
        requireReturn: false,
        requireParamDescription: true,
        requireReturnDescription: true,
      },
    ],
  },
};
