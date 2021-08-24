const path = require('path');
const port = process.env.PORT || 3000;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'production',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    './src/index.js' 
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },

      {
        test: /\.css$/i,
        use: [
          'style-loader','css-loader',
        ],
        exclude: /\.module\.css$/
      },

      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
        {
          loader: 'file-loader',
        },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
};