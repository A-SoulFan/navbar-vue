module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "vue/html-indent": 0,
    "@typescript-eslint/no-var-requires": 0,
  },
  plugins: [
    '@typescript-eslint',
  ],
  env: {
      "browser": true,
      "amd": true,
      "node": true
  },
}
