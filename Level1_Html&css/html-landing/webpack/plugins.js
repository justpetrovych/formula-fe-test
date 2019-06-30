const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const _HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: 'styles/[name].css',
  chunkFilename: '[id].css',
});
const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/styles'),
  files: '**/*.s?(a|c)ss',
  failOnError: false,
  quiet: false,
});
const CopyResources = new CopyWebpackPlugin([
  {
    from: './src/fonts',
    to: './fonts',
  },
  {
    from: './src/img',
    to: './img',
  },
  {
    from: './src/js/sw.js',
    to: './',
  },
]);
const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../src/views/index.pug'),
});
module.exports = {
  MiniCssExtractPlugin,
  StyleLintPlugin,
  CopyResources,
  HtmlWebpackPlugin,
};
