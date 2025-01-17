module.exports = {
    env: {
      'jest/globals': true,
    },
    root: true,
    extends: '@react-native-community',
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      quotes: ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'react/default-props-match-prop-types': ['error'],
      'react/sort-prop-types': ['error'],
      'prettier/prettier': 1,
    },
    settings: {
      'import/resolver': {
        'babel-module': {},
      },
    },
  };