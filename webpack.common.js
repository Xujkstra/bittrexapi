const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './test.js',

  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ],

  module: {
    rules: [ {
      test: /\.vue$/,
      use: ['vue-loader'],
      options: { scss: 'vue-style-loader!css-loader!postcss-loader!sass-loader' },
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "env"
          ],
          plugins: ["syntax-dynamic-import"]
        }
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'scss-loader']
    }]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'components': path.resolve(__dirname, "components"),
      'src': path.resolve(__dirname, "views"),
      'utils': path.resolve(__dirname, 'utils')
    }
  },
}