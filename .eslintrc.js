module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    "plugin:react/recommended"
  ],
  parser: '@typescript-eslint/parser',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint'
  ],
  rules: {
    semi: ["error", "always"],  //语句必须用;
    "space-before-function-paren": 0,
    "no-unused-vars": 1,
    "react/prop-types": [0, { ignore: ['className', 'style', 'children'] }], //定义是否检测propTypes
    "no-return-assign": 0,
    "react/display-name": 0,
    "prettier/prettier": ["error", {
      singleQuote: true,
      jsxSingleQuote: true,
      endOfLine: 'auto',
      trailingComma: 'none',
      arrowParens: 'avoid'
    }],
    eqeqeq: 0,
    "no-use-before-define": "off", //'React' was used before it was defined
  }
}
