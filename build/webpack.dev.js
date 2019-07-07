  const base = require('./webpack.base.js');
  const merge = require('webpack-merge');
  const path = require('path');
  const webpack = require('webpack');
  const env = require('../config/dev.env');

  module.exports = merge(base, {
    /** creating local server using webpack-dev-server
  npm install webpack-dev-server --save-dev 
  **/
    devServer: {
      contentBase: path.join(__dirname, "../dist"),
      port: 6565,
      compress: true,
      open: true
    },
     plugins: [
      new webpack.DefinePlugin({
          'process.env': JSON.stringify(env)
      })
    ]
    
  });
