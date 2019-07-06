const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "js/app.js",
    path: path.resolve(__dirname, "../dist")
  },

  /**
   * adding style loaders and css loaders
   * npm install css-loader and style-loader
   */
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
