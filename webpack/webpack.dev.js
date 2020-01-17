const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(
  {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: ['webpack-hot-middleware/client'],
    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
  commonConfig
);
