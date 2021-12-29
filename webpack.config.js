const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: path.join(__dirname, 'app', 'index.js')
  },
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./app/index.html"})
  ]
};