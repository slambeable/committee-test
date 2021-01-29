const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => (isDev ? `[name]${ext}` : `[name].[hash]${ext}`);

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new TerserWebpackPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new CssMinimizerWebpackPlugin(),
    ];
  }

  return config;
};

const plugins = () => {
  const config = [
    new HTMLWebpackPlugin({
      template: './index.html',
      collapseWhitespace: isProd,
      removeComments: isProd,
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('.css'),
    }),
  ];

  if (isDev) {
    config.push(
      new webpack.HotModuleReplacementPlugin(),
      new ESLintWebpackPlugin(),
    );
  }

  return config;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: filename('.js'),
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProd ? '/committee-test/' : '/',
  },
  optimization: optimization(),
  resolve: {
    extensions: ['.js', 'css', 'pug', 'styl'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    port: 4200,
    hot: isDev,
  },
  devtool: 'source-map',
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          'stylus-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
