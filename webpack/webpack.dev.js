const webpack = require('webpack');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const commonConfig = require('./webpack.common');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
  merge(
    {
      mode: 'development',
      devtool: 'cheap-module-eval-source-map',
      entry: ['webpack-hot-middleware/client'],
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin(),
      ],
    },
    commonConfig
  )
);
