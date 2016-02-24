var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    autoWatch: true,
    singleRun: true,
    browsers: ['chromeWithoutSecurity'],
    customLaunchers: {
      chromeWithoutSecurity: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha', 'coverage'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
              test: /\.(jsx|js)?$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                  presets: ['react', 'es2015', 'stage-0'],
                  plugins: [
                      'transform-node-env-inline',
                      'transform-decorators-legacy'
                  ]
              }
          },
          {test: /\.css$/, loader: 'style!css'},
          {test: /\.less$/, loader: 'style!css!less'},
          {test: /\.json$/, loader: 'json-loader'},
          {test: /\.(png|eot|woff|woff2|svg|ttf)$/, loader: 'url-loader'}
        ],
        postLoaders: [
          {
            test: /\.(jsx|js)$/,
            exclude: /(__tests__|node_modules)\//,
            loader: 'istanbul-instrumenter'
          }
        ]
      },
      resolve: {
          root: [
              path.resolve('./app/'),
              path.resolve('./node_modules/')
          ],
          modulesDirectories: ['node_modules'],
          extensions: ['', '.jsx', '.js']
      },
      plugins: [
        new webpack.ProvidePlugin({
          React: 'react'
        }),
          // new webpack.optimize.UglifyJsPlugin(),
      ],
    },
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      type : 'html',
      dir : 'coverage',
      subDir: 'document'
    }
  });
};
