const base = require("./webpack.base.js");

const merge = require("webpack-merge"); 
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin");


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
    new UglifyJsPlugin({
      sourceMap: true
    }),

    new webpack.DefinePlugin({
        'process.env': JSON.stringify(env)
    }),
    new MiniCssExtractPlugin({
      filename: '../dist/css/app.css'
    }),
    new OptimizeCssPlugin({
      cssProcessorOptions: {
        map:{
          inline: false
        }
      }
    })
  ]
});
