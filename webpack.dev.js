const fs = require('fs');
const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = (env) => {
	return merge(common, {
		mode: 'development',
		devtool: 'inline-source-map',
		devServer: {
			historyApiFallback: true,
			port: 443,
			host: '0.0.0.0',
			static: {
				directory: path.join(__dirname, 'dist'),
			},
			client: {
				progress: true,
			},
			server: {
				type: 'https',
				options: {
					key: fs.readFileSync('renderer.dev+3-key.pem'),
					cert: fs.readFileSync('renderer.dev+3.pem'),
				},
			},
			allowedHosts: 'all',
		},
		entry: {
			index: './src/index.ts',
		},
		output: {
			filename: '[name].[contentHash].js',
			path: __dirname + '/temp',
			publicPath: '/',
		},
		plugins: [
			// new webpack.DefinePlugin({
			// 	'process.env.MODE': JSON.stringify(env.MODE),
			// }),
		],
	});
};
