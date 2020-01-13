const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(
  {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    entry: ['webpack-hot-middleware/client'],
    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
  commonConfig,
);
