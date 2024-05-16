const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = (env) => {
	return merge(common, {
		mode: 'production',
		entry: {
			index: './src/index.ts',
		},
		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin()],
		},
		output: {
			filename: '[name].[contenthash].js',
			path: __dirname + '/dist',
		},
		plugins: [new CleanWebpackPlugin()],
	});
};
