const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = Merge(CommonConfig, {
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
                sourceMap: true
            })
		]
	},
	mode: 'production',
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		})
	]
});