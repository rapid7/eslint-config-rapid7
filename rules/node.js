/*
* NodeJS 4.x:
* * Supports CommonJS module/require
* * Does not support import/export
* * Does not support JSX (a browser-targeted feature)
* * Does not support destructuring or spread operators
*/
module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      jsx: false,
      experimentalObjectRestSpread: false
    },
    sourceType: 'script'
  },
  rules: {
    'arrow-body-style': 0,
    'block-spacing': [1, 'always'],
    indent: [1, 2],
    'linebreak-style': [1, 'unix'],
    'no-trailing-spaces': 1,
    'no-irregular-whitespace': 1,
    strict: [2, 'global'],
    'require-jsdoc': [1, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true
      }
    }]
  }
};
