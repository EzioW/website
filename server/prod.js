const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendfile(path.resolve(process.cwd(), 'dist/index.html'));
});

app.listen(8080);
