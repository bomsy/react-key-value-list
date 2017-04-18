var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('../webpack.config.js');
config.entry.examples.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server')
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true
});

server.listen(8080);
