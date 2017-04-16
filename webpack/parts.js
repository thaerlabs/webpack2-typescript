const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.typescript = {
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx']
	}
};

module.exports.html = {
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
};

module.exports.devServer = {};

module.exports.setEnvVar = (name, value) => {
	return {
		plugins: [
			new webpack.DefinePlugin({
				[name]: JSON.stringify(value)
			})
		]
	};
};
