const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'fullscreen.min.js',
  	path: path.resolve(__dirname, 'dist'),
    library: 'fullscreen',
    libraryTarget: 'umd'
  },
  module: {
  	loaders: [{
  		test: /\.js$/,
  		exclude: /node_modules/,
  		loader: 'babel-loader'
  	}]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
};