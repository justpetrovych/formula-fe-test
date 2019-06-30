const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: [
    path.resolve(__dirname, '../src/js/index.js'),
    path.resolve(__dirname, '../src/styles/main.scss'),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [loaders.CSSLoader, loaders.JSLoader, loaders.ESLintLoader, loaders.PugLoader],
  },
  plugins: [
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
    // new PreloadCssPlugin(),
    plugins.CopyResources,
    plugins.HtmlWebpackPlugin,
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
      chunks: 'all',
    }),
    new CompressionPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].bundle.js',
  },
};
