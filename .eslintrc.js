const path = require('path')

module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-native', 'simple-import-sort'],
  rules: {
    'global-require': 'off',
    'import/export': 'off',
    'sort-import': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'jsx-a11y/accessible-emoji': 'off',
    'react/destructuring-assignment': ['off', 'always'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': 'off',
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
  },
  settings: {
    'import/resolver': {
      alias: { map: ['~', path.resolve(__dirname, './src')] },
      extensions: [
        '.js',
        '.ios.js',
        '.android.js',
        '.ts',
        '.ios.ts',
        '.android.ts',
        '.tsx',
        '.ios.tsx',
        '.android.tsx',
        '.json',
      ],
    },
  },
}
