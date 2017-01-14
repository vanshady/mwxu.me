const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.join(__dirname, 'src', 'client.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: '/js/',
    filename: 'bundle.js',
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'react-hot!babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            'react',
            'es2015',
            'stage-2',
          ],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
          ],
        },
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
};

module.exports = config;
