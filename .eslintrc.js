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
    'import/no-extraneous-dependencies': ['off'],
    'object-curly-newline': ['off'],
  },
};
