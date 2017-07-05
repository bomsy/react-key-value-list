var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    examples: ["./examples/index.js"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    path: path.resolve(__dirname, "examples"),
    publicPath: "/examples/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: ["react-hot-loader", "babel-loader"],
        exclude: /build|scripts|node_modules/
      }
    ]
  }
};
