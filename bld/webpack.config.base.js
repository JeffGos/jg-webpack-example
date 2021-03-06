const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = options => ({
  context: process.cwd(),
  entry: options.entry,
  output: Object.assign({ 
    path: path.resolve(process.cwd(), 'dist'),
    sourceMapFilename: '[name].js.map'
  }, options.output),
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
    }, {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.swf$/i,
      loader: 'url-loader?limit=1' //don't inline any images - use direct URLs
    }, {
      test: /\.(eot|ttf|woff|woff2|otf)$/,
      loader: 'file-loader?name=assets/fonts/[name].[ext]'
    }],
    noParse: [/moment.js/]
  },
  plugins: options.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
    new ExtractTextPlugin("[name].css")
  ]),
  resolve: {
    modules: [path.resolve('src'), path.resolve('node_modules')],
    extensions: [
      '.js'
    ]
  },
  devtool: options.devtool,
  target: 'web',
  stats: options.stats || false
})