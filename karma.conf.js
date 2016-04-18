var path = require('path'); // eslint-disable-line
var webpack = require('webpack'); // eslint-disable-line

module.exports = function(config) { // eslint-disable-line
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
            loader: 'babel'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          }
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
      }
    },
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage',
      subDir: 'document'
    }
  });
};
