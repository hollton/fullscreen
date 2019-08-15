const path = require('path')

module.exports = {
  entry: './src',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
    library: 'fullscreen',
    libraryTarget: "umd"
  },
  module: {
  	loaders: [{
  		test: /\.js$/,
  		exclude: /node_modules/,
  		loader: 'babel-loader'
  	}]
  }
};