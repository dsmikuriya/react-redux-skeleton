'use strict'

import fs from 'fs'
import path from 'path'
import config from 'config'
import webpack from 'webpack'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'

const configFile = path.resolve(__dirname, config.file)

fs.writeFileSync(configFile, JSON.stringify(config))

export default {
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  entry: {
    'index':          './src/index.jsx',
    'babel-polyfill': './node_modules/babel-polyfill/'
  },
  output: {
    path: __dirname + '/public/javascripts',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: /config/
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./public'] }
    })
  ]
}
