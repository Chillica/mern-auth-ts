const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

// Pass in express.router for app
module.exports = (router) => {
  // API routes
  fs.readdirSync(__dirname + '/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(router);
  });
};