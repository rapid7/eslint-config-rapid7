module.exports = {
  parserOptions: {
    ecmaVersion: 5
  },
  rules: {
    'max-depth': [1, 6],
    'max-len': [2, {
      'code': 120,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],
    'max-statements': [1, 50]
  }
};
