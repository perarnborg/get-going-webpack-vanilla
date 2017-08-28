var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var autoprefixer = require('autoprefixer');

loaders.push({
	test: /\.scss?$/,
	loader: 'style-loader!css-loader!postcss-loader!sass-loader',
	include: path.join(__dirname, 'src', 'styles')
});


module.exports = {
	entry: [
		'./src/index.js'
	],
    node: {
      fs: 'empty'
    },
	devtool: process.env.WEBPACK_DEVTOOL || 'cheap-source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'widget.[chunkhash].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			title: 'Get Going Preact Widget'
		})
	]
};
