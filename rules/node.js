module.exports = {
  rules: {
    'linebreak-style': [1, 'unix'],
    'lines-around-directive': [2, 'always'],
    'no-trailing-spaces': 1,
    'no-irregular-whitespace': 1,
    strict: [2, 'global'],
    'require-jsdoc': [
      1,
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ],
  },
};
