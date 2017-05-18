var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.config.base')({
  devtool: 'inline-source-map',
  entry: [
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), 'src/app.js')
  ],
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack 2.5.1 Example',
      template: 'src/index.html'
    })
  ]
})