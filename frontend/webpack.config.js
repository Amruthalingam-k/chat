const path = require('path');
 
module.exports = {
  mode: 'development',

    // mode: 'production',
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../static/assets/js'),
    filename: 'main.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};