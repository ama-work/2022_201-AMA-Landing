module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // warn about unused variables, rather than erroring
    'no-unused-vars': 1,
    // to avoid conflict between prettier formatter and standard js linter
    // ref. https://github.com/prettier/prettier/issues/1139
    'space-before-function-paren': 0,
    semi: [0, 'always'],
    quotes: [0, 'double'],
    'no-tabs': [0, { allowIndentationTabs: true }]
  }
}
