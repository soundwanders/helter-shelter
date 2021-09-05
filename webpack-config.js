const path = require('path');
const port = process.env.PORT || 3000;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV !== 'prod';


module.exports = {
  mode:'production',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    './index.html',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    port: port,
  },

  module: {
    rules: 
    [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
            ]
          }
        },
      },
      {
        test: /\.(ico|png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]'
        },
      },
      {
        test: /\.txt$/,
        type: 'asset',
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin(
      {
        title: 'Helter-Shelter',
        template: 'index.html',
        inject: 'body',
        minify: !isDev && {
          html5: true,
          collapseWhitespace: true,
          removeComments: true,
        }
      },
    ),
  ],
};