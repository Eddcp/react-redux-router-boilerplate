'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../', 'src/index.js'),
  resolve: {
    modules: [path.resolve(__dirname, '../', 'src'), 'node_modules']
  },
  module: {
    // loader for js files invoking the transpiler from ES6 to ES5
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'public/index.html')
    })
  ]
}