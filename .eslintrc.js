module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021
  },
  globals: {
    $: 'readonly',
    jQuery: 'readonly',
  },
  ignorePatterns: [
    'src/assets/**',
    'public/assets/**',
    'public/js/**',
    'dist/**',
    'coverage/**',
    'node_modules/**'
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      parser: 'vue-eslint-parser',
      plugins: ['vue'],
      extends: ['plugin:vue/vue3-essential'],
      parserOptions: {
        parser: '@babel/eslint-parser',
        sourceType: 'module',
        ecmaVersion: 2021
      }
    },
    {
      files: ['tests/**/*.js'],
      env: {
        jest: true
      },
      globals: {
        jest: 'readonly'
      }
    }
  ],
  rules: {
    'quotes': ['warn', 'single'],
    'no-unused-vars': 'warn'
  }
}
