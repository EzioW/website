const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const contextPath = process.cwd();

module.exports = {
  entry: ['./src/views/index.jsx'],
  output: {
    path: path.resolve(contextPath, 'dist'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'bundle.js', // string
    // the filename template for entry chunks
    publicPath: './', // string
    // the url to the output directory resolved relative to the HTML page
    // library: 'MyLibrary', // string,
    // the name of the exported library
    // libraryTarget: 'umd', // universal module definition
    // the type of the exported library
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less'],
    alias: {
      components: path.resolve(contextPath, 'src/components'),
    },
  },
  context: contextPath,
  target: 'web',
  stats: 'errors-only',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
};
