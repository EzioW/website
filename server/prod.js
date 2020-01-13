const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack/webpack.config.prod');

const app = express();
const complier = webpack(config);

app.use(webpackDevMiddleware(complier));

app.listen(8080);
