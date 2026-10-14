import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  {
    ignores: [
      'src/assets/**',
      'public/assets/**',
      'public/js/**',
      'dist/**',
      'coverage/**',
      'node_modules/**'
    ]
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        $: 'readonly',
        jQuery: 'readonly'
      }
    },
    rules: {
      'quotes': ['warn', 'single'],
      'semi': ['warn', 'always'],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  },
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
        jest: 'readonly'
      }
    }
  }
];
