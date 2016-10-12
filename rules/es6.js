module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      arrowFunctions: true,
      binaryLiterals: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: false,
      modules: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: false,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      octalLiterals: true,
      regexUFlag: true,
      regexYFlag: true,
      restParams: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true,
      unicodeCodePointEscapes: true,
      globalReturn: true,
      jsx: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'arrow-body-style': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': [2, 'always'],
    'arrow-spacing': [2, {
      'after': true,
      'before': true
    }],
    'computed-property-spacing': [2, 'never'],
    'constructor-super': 2,
    'generator-star-spacing': [2, {
      'after': true,
      'before': false
    }],
    'no-caller': 1,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'object-shorthand': [2, 'always', {
      'avoidQuotes': true
    }],
    'prefer-spread': 1,
    'rest-spread-spacing': [2, 'never'],
    'yield-star-spacing': [2, 'after']
  }
};
