// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    rules: {
      'indent': ['error', 2],
      'semi': ['error', 'always'],
      'vue/multi-word-component-names': 'off',
      'vue/component-tags-order': ['error', {
        'order': [ 'script', 'template', 'style' ]
      }],
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
    },
  },
);
