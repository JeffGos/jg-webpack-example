var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.config.base')({
  entry: [ 
    path.join(process.cwd(), 'src/app.js')
  ],

  output: {
    filename: '[name].[chunkhash].js',
    publicPath: '/',
    path: path.join(process.cwd(), 'dist'),
  },

  devtool: 'source-map',
  stats: true,

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      sourceMap: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new HtmlWebpackPlugin({
      title: 'Webpack 2.5.1 Example',
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
  ]
})