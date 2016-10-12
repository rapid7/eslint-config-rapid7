module.exports = {
  'plugins': [
    'react'
  ],
  'ecmaFeatures': {
    'jsx': true
  },
  'rules': {
    'jsx-quotes': [2, 'prefer-double'],

    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 1,
    'react/jsx-sort-props': 2,
    'react/jsx-uses-vars': 2,
    'react/prefer-es6-class': 2,
    'react/sort-comp': [1, {
      'order': [
        'lifecycle',
        'everything-else',
        'render'
      ]
    }]
  }
};
