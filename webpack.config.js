module.exports = {
  mode: 'development',
  entry: './src/script.js',
  output: {
    publicPath: '/dist/',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {

  },
  
};