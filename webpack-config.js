const path = require('path');
const port = process.env.PORT || 3000;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV !== "prod";


module.exports = {
  mode:'production',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist",
    clean: true,
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
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
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-async-to-generator',
              '@babel/plugin-transform-regenerator'
            ]
          }
        },
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
        {
          loader: 'file-loader',
        },
        ],
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './index.html',
        minify: !isDev && {
          html5: true,
          collapseWhitespace: true,
          caseSensitive: true,
          removeComments: true,
          removeEmptyElements: false
        }
      },
    ),
  ],
};