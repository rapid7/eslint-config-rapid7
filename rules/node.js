'use strict';

/*
* NodeJS 4.x:
* - Supports CommonJS module/require
* - Does not support import/export
* - Does not support destructuring or spread operators
* - Requires global `strict` mode for class and block-scoped declarations
*
* Notes:
* - UNIX whitespace is desired to ensure correct parsing on all
*   platforms. NodeJS-target JavaScript needs to be evaluated by a shell
*   when an executable script has a shebang header, and `\m` whitespace can
*   break this in strange ways.
*/
module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      experimentalObjectRestSpread: false
    },
    sourceType: 'script'
  },
  rules: {
    'linebreak-style': [1, 'unix'],
    'lines-around-directive': [2, 'always'],
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
