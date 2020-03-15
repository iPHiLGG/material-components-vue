const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.config.common')

const root = path.join(__dirname)

module.exports = merge(common, {
  mode: 'development',
  target: 'web',
  output: {
    filename: '[name]/index.js',
    globalObject: 'this',
    libraryTarget: 'umd',
    path: path.resolve(root + '/dist')
  }
})
