const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs');

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = 'style-loader';

console.log('dirname', __dirname);

const config = {
	target: 'web',
	entry: {
		index: './src/index.ts',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[contenthash].js',
	},
	devServer: {
		open: true,
		host: 'localhost',
		// port: 8080,
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		// https: {
		// 	key: fs.readFileSync('./certs/slam.dev-key.pem'),
		// 	cert: fs.readFileSync('./certs/slam.dev.pem'),
		// },
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackInjector(),
		new HtmlWebpackPlugin({
			// assetPath: '',
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				exclude: ['/node_modules/'],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, 'css-loader'],
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
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
	} else {
		config.mode = 'development';
	}
	return config;
};
