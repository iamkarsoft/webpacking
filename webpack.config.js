const path = require('path');
module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "js/app.js",
    path: path.resolve(__dirname, "dist")
  },

  /**
   * adding style loaders and css loaders
   * npm install css-loader and style-loader
   */
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  /** creating local server using webpack-dev-server
  npm install webpack-dev-server --save-dev 
  **/
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 6565,
    compress: true,
    open: true
  }
};