module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  rules: {
    semi: [2, 'never'],
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-closing-bracket-location': 0,
    'react/react-in-jsx-scope': 'off'
  },
  globals: {
    window: true
  }
}
