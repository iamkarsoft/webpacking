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
        use: ["style-loader", 
        {
          loader: "css-loader",
          options: {
            minimize: process.env.NODE_ENV === 'prod'
          }
        },
         "sass-loader"
        ]
      }
    ]
  }
};
