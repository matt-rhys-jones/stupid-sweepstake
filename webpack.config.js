const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
            loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
    ]
  }
}
