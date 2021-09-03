const path = require('path');
const port = process.env.PORT || 3000;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV !== "prod";


module.exports = {
  mode:'production',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
    clean: true,
  },
  resolve: {
    extensions: [ 
      '.js', '.jsx', 
    ]
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
      // {
      //   test: /\.html/,
      //   type: 'asset/resource',
      // },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],

        use: [ isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin(
      {
        title: 'Helter-Shelter',
        template: './index.html',
        minify: !isDev && {
          html5: true,
          collapseWhitespace: true,
          removeComments: true,
        }
      },
    ),
  ],
};