const path = require('path');

module.exports = {

  entry: './src/app.js',
  output: {
    //must-be an absolute path to the folder
    path: path.join(__dirname,'public') ,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, "node_modules")
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader', 
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer:{
    contentBase: path.join(__dirname,'public'),
    historyApiFallback: true
  }
};