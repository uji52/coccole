module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-essential',
  ],
  rules: {
    "vue/multi-word-component-names": ["error", {
      "ignores": ["fa"]
    }]
  }
}
