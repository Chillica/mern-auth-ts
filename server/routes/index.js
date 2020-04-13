const fs = require('fs');
const path = require('path');
var express = require('express');
var router = express.Router();

// Pass in express.router for app
// Pass in passport for pp
module.exports = (app, pp) => {
  // API routes
  fs.readdirSync(__dirname + '/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(router);
  });
};