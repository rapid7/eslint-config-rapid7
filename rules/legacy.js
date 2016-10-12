module.exports = {
  parserOptions: {
    ecmaVersion: 5
  },
  rules: {
    'max-depth': [1, 6],
    'max-len': [2, {
      'code': 120,
      'ignoreStrings': true
    }],
    'max-statements': [1, 50],
    'no-bitwise': 1
  }
};
