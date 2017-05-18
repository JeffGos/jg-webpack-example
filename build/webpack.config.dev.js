var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.config.base')({
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    'src/js/app/js'
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
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
})