module.exports = {
  plugins: ['import', 'rapid7'],
  rules: {
    'import/default': 2,
    'import/export': 2,
    'import/first': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'import/no-extraneous-dependencies': 2,
    'import/no-self-import': 2,

    'rapid7/named-import-newline': [
      2,
      {
        allowMultipleImportsPerLine: false,
      },
    ],
  },
};
