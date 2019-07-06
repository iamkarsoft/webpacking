const base = require("./webpack.base.js");
const merge = require("webpack-merge"); 
const webpack = require('webpack');
module.exports = merge(base, {
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
