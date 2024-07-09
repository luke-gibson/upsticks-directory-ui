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
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
    },
  },
);
