var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: process.env.NODE_ENV !== 'production' ? 'eval' : 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    root: [
      path.resolve('./app/'),
      path.resolve('./node_modules/')
    ],
    modulesDirectories: [ 'node_modules' ],
    extensions: [ '', '.jsx', '.js' ]
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(js|jsx)?$/,
        loaders: [ 'react-hot', 'babel' ],
        include: path.join(__dirname, 'app')
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(png|eot|woff|woff2|svg|ttf)$/, loader: 'url-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: '"' + process.env.NODE_ENV + '"'
        }
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
  }),
    // new AutoInstallPlugin({save: false})
  ],
  devServer: {
    contentBase: './build',
    noInfo: false,
    hot: true,
    inline: true,
    stats: {
      colors: true
    }
  }
};
