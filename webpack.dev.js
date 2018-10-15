const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		historyApiFallback: true,
		noInfo: false,
		stats: 'minimal',
		hot: true
    },
    devtool: 'inline-source-map'
});