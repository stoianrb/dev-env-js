/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import path from "path";
// eslint-disable-next-line import/namespace, import/no-unresolved, import/default
import HtmlWebpackPlugin from "html-Webpack-plugin";

export default {
  mode: "development",
  devtool: "eval-source-map",
  entru: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
