const base = require("./webpack.base.js");

const merge = require("webpack-merge"); 
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const env = require("../config/prod.env");
module.exports = merge(base, {
  module:{
    rules: [
      {
        test: /\.scss$/,
        use:  [
          MiniCssExtractPlugin.loader,
          'css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': JSON.stringify(env)
    }),
    new MiniCssExtractPlugin({
      filename: '../dist/css/app.css'
    })
  ]
});
