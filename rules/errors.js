'use strict';

module.exports = {
  rules: {
    'comma-dangle': [2, 'never'],
    'no-invalid-regexp': 2,
    'valid-jsdoc': [1, {
      preferType: {
        array: 'Array',
        Boolean: 'boolean',
        Function: 'function',
        Number: 'number',
        object: 'Object',
        String: 'string'
      },
      requireReturn: false,
      requireParamDescription: false,
      requireReturnDescription: false
    }]
  }
};
