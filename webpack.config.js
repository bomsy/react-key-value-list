var path = require('path');
var webpack = require('webpack');

module.exports =  {
  entry: {
    examples: ['./examples/index.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'examples'),
    publicPath: '/examples/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\*.js/,
      loaders: ['react-hot', 'babel'],
      exclude: /build|scripts|node_modules/
    }]
  }
}
