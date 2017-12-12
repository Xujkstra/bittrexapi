const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: '0.0.0.0',
    port: 1111,
    disableHostCheck: true,
    proxy: {
      "/api/**": {
        target: "https://bittrex.com",
        secure: false,
        changeOrigin: true
      }
    }
  },

  devtool: 'inline-source-map'
})