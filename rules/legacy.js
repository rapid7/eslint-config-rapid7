module.exports = {
  parserOptions: {
    ecmaVersion: 5
  },
  rules: {
    'max-depth': [1, 6],
    'max-len': [1, 120, {
      'ignoredComments': true,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],
    'max-statements': [1, 50],
    'no-bitwise': 1
  }
};
