var webpack = require("webpack");
var lodash = require("lodash");
var baseConfs = require('./webpack.base.conf.js');

baseConfs = lodash.map(baseConfs, function(conf) {
  conf.output = {
    path: 'dist/production',
    filename: '[name]-[chunkhash].js',
    chunkFilename: 'chunk-[chunkhash].js'
  };
  conf.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: /liuyanghejerry/
    })
  );

  return conf;
});

module.exports = baseConfs;
