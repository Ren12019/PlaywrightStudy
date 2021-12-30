const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, 'app', 'index.js')
  },
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./app/index.html"})
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  devServer: {
		open: true
	}
};