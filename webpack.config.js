const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// console.log(__dirname, path.resolve(__dirname, 'dist'));

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}
