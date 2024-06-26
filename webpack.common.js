const path = require('path');

/* Configure HTMLWebpack plugin */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	chunks: ['index'],
});

/* Configure Copy */
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const CopyWebpackPluginConfig = new CopyWebpackPlugin([
// 	{ from: 'src/assets', to: '' },
// ]);

/* Configure ProgressBar */
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ProgressBarPluginConfig = new ProgressBarPlugin();

/* configure client environment vars */
const webpack = require('webpack');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				exclude: ['/node_modules/'],
			},
			{
				test: /\.css$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
				],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	},
	plugins: [
		HTMLWebpackPluginConfig,
		ProgressBarPluginConfig,
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'developement',
		}),
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
	],
};
