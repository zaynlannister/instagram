/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    "plugin:vue/vue3-essential",
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  'rules': {
    "quotes": [2, "double", { "avoidEscape": true }]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
