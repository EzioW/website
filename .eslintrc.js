const webpackConfig = require('./webpack/webpack.config.common');

module.exports = {
  extends: 'eslint-config-seraph',
  settings: {
    'import/resolver': {
      webpack: {
        config: webpackConfig,
      },
    },
  },
  rules: {},
};
