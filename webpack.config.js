const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

console.log('running...')
module.exports = {
	entry: {
		Sarah: './main.js',
		Vendor: [
			'lodash',
			'vue',
			'd3'
		]
	},

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'build')	,
		chunkFilename: '[name].[chunkhash].js'
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader',
					options: {
						scss: 'vue-style-loader!css-loader!postcss-loader!sass-loader',
					}
				},
				exclude: /node_modules/
			},
			{
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
			},
			{
				test: /\.css$/,
				use: 'css-loader'
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},

	resolve: {
		alias: {
      'vue$': 'vue/dist/vue.common.js',
      'components': path.resolve(__dirname, "components"),
			'src': path.resolve(__dirname, "views"),
			'utils': path.resolve(__dirname, 'utils')
    }
	},

	plugins: [
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, './index.html')
		}),
		new webpack.DefinePlugin({
			NODE_ENV: 'production'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'Vendor'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		}),
		new webpack.HashedModuleIdsPlugin()
	],

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
}