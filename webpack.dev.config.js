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
        loader: 'react-hot!babel?presets[]=react&presets[]=es2015',
        exclude: /(node_modules)/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
};

module.exports = config;
