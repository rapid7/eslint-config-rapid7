module.exports = {
  rules: {
    'func-style': [2, 'expression', {allowArrowFunctions: true}],
    'line-comment-position': [2, {position: 'above'}],
    'max-depth': [1, 1],
    'max-statements': [1, 25],
    'no-magic-numbers': [
      2,
      {
        enforceConst: true,
        ignore: [0, 1, -1],
        ignoreArrayIndexes: true,
      },
    ],
    'no-param-reassign': [2, {props: true}],
    'one-var': [2, 'never'],
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
    ],
    'sort-keys': [2, 'asc', {caseSensitive: false, natural: true}],
    'valid-jsdoc': [
      2,
      {
        prefer: {
          argument: 'arg',
          class: 'constructor',
          return: 'returns',
        },
        preferType: {
          Boolean: 'boolean',
          Function: 'function',
          Null: 'null',
          Number: 'number',
          object: 'Object',
          regexp: 'RegExp',
          promise: 'Promise',
          String: 'string',
          Undefined: 'undefined',
        },
        requireReturn: false,
        requireReturnType: true,
        requireParamDescription: true,
        requireReturnDescription: true,
      },
    ],
  },
};
