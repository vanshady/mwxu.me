const webpack = require('webpack');
const path = require('path');

const CLIENT_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'src', 'static', 'js');

const config = {
  entry: CLIENT_DIR + '/client.js',
  output: {
    path: DIST_DIR,
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
