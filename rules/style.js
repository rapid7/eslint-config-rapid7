module.exports = {
  rules: {
    'block-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'comma-dangle': 2,
    'comma-spacing': [2, {
      'after': true,
      'before': false
    }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'curly': 2,
    'eol-last': 2,
    'func-call-spacing': [2, 'never'],
    'key-spacing': [2, {
      'afterColon': true,
      'beforeColon': false
    }],
    'keyword-spacing': [2, {
      'after': true
    }],
    'new-parens': 2,
    'newline-after-var': 2,
    'newline-before-return': 2,
    'no-array-constructor': 2,
    'no-floating-decimal': 2,
    'no-lonely-if': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': 2,
    'no-unexpected-multiline': 1,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'never'],
    'object-shorthand': [2, 'always', {
      'avoidQuotes': true
    }],
    'one-var': [2, {
      'const': 'never'
    }],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'always'],
    'space-before-blocks': [2, {
      'classes': 'always',
      'functions': 'always',
      'keywords': 'always'
    }],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'nonwords': false,
      'words': true
    }],
    'template-curly-spacing': [2, 'never'],
  }
};
