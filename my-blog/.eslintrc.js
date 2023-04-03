module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-undef': 'off',
    'import/no-cycle': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    'global-require': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        jsxBracketSameLine: false,
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/jsx-no-useless-fragment': [
      2,
      {
        allowExpressions: true,
      },
    ],
  },
}
