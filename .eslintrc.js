const webpackConfig = require('./webpack/webpack.common');

module.exports = {
  extends: 'eslint-config-seraph',
  settings: {
    'import/resolver': {
      webpack: {
        config: webpackConfig,
      },
    },
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-extraneous-dependencies': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'object-curly-newline': ['off'],
  },
};
