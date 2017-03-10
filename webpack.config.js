var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {

  //devtool: 'source-map',

  entry: './src/index.js',

  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
    }),
    new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
    })
  ]

}
