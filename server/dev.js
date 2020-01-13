const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack/webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.write(
    compiler.outputFileSystem.readFileSync(
      path.resolve(process.cwd(), 'dist/index.html'),
      'utf-8',
    ),
  );
  res.end();
});

app.listen(3000);
