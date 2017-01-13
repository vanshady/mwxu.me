const webpack = require('webpack');
const path = require('path');

const CLIENT_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'src', 'static', 'js');

const config = {
  entry: CLIENT_DIR + '/client.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            'react',
            'es2015',
          ],
        },
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      compress: {
        warnings: false,
        drop_console: true,
      },
      comments: false,
    }),
  ],
};


module.exports = config;
