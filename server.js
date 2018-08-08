'use strict';

const express    = require('express');
const path       = require('path');
const fs         = require('fs');
const app        = express();

app.get('/page', function (req, res, next) {
  var options = {
    root: __dirname + '/build/',
  };

  var fileName = 'index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

app.use('/', express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT || 8080, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
