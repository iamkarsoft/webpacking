  const base = require('./webpack.base.js');
  const merge = require('webpack-merge');
  const path = require('path');
  module.exports = merge(base, {
    /** creating local server using webpack-dev-server
  npm install webpack-dev-server --save-dev 
  **/
    devServer: {
      contentBase: path.join(__dirname, "../dist"),
      port: 6565,
      compress: true,
      open: true
    }
  });
