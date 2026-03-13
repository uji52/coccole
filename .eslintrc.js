module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  globals: {
    $: 'readonly',
    jQuery: 'readonly',
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: ['fa'],
    }],
    'vue/no-unused-vars': 'warn',
    'quotes': ['warn', 'single'],
    'vue/no-multiple-template-root': 'off',
  }
}
