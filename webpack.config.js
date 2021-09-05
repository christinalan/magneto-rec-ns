const path = require("path");

module.exports = {
  entry: "./public/main_world.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  performance: {
    hints: false,
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
  devServer: {
    // publicPath: "/public/",
    compress: true,
    port: 3000,
    hot: true,
  },
};
