module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-essential',
  ],
  globals: {
    $: 'readonly',
    jQuery: 'readonly',
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
