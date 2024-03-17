// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'off',
  },
  formatters: {
    css: true,
    html: true,
    markdown: true,
  },
})
