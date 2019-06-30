const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      plugins: [
        'dynamic-import-node-babel-7',
        'remove-webpack'],
      presets: [
        '@babel/preset-env'
      ],
    },
  },
};
const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: `${__dirname}/.eslintrc`,
    },
  },
};
const CSSLoader = {
  test: /\.s?(a|c)ss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: `${__dirname}/../src/styles/`,
      },
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: 'sass-loader',
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: `${__dirname}/postcss.config.js`,
        },
      },
    },
  ],
};
const PugLoader = {
  test: /\.pug$/,
  use: ['pug-loader'],
};
module.exports = {
  JSLoader,
  ESLintLoader,
  CSSLoader,
  PugLoader,
};
