const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');
// const env = process.env.NODE_ENV;

module.exports = {
  mode: 'development',
  entry: join(__dirname, 'src/index.js'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'index.bundled.js'
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
          presets: ['@babel/preset-env']
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      showErrors: true,
      cache: true,
      title: 'Vue with Webpack',
      template: join(__dirname, 'public/index.html'),
    })
  ]
};
