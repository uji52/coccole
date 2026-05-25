module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 2021,
    requireConfigFile: false
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
    'semi': ['warn', 'always'],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
  }
};
