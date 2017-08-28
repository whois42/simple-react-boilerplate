const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('postcss-import')(),
                  require('postcss-cssnext')({browsers: ['last 2 versions', '> 5%']})
                ]
              }
            }
          ]})
      },
      {
        test: /\.js$/,
        use: [ { loader: 'babel-loader', options: { presets: ["es2015", "react", "stage-0"], plugins: ["transform-decorators-legacy"] } } ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/DOM/index.ejs'
    }),
    new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        }),
  ]
}
