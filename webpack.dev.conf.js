var webpack = require("webpack");
var lodash = require("lodash");
var baseConfs = require('./webpack.base.conf.js');

baseConfs = lodash.map(baseConfs, function(conf) {
  conf.output.path = 'dist/dev';

  return conf;
});

module.exports = baseConfs;
