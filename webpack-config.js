const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode:'production',
  entry: './src/index.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
  },

  module: {
    
    rules: [
      {
        test: /\.css$/,
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
        test: /\.css$/,
        use: [
          'style-loader','css-loader',
        ],
        exclude: /\.module\.css$/
      },

      {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
      {
        loader: 'file-loader',
      },
      ],
    }
    ]
  }
};