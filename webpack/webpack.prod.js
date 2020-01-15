const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  output: {
    filename: 'bundle.[hash].js',
  },
  mode: 'production',
});
