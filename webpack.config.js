var path = require('path');
var webpack = require('webpack');
module.exports = {
//   entry: "./es6/main.js",
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'es6/mydiagram.js')
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'es6'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}