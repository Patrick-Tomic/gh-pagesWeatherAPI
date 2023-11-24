/* eslint-disable no-undef */
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export const mode = 'development';
export const entry = { bundle: resolve(__dirname, 'src/index.js') };
export const devtool = 'inline-source-map';
export const devServer = {
	static: './dist',
};
export const plugins = [
	new HtmlWebpackPlugin({
		title: 'Weather Application',
		filename: 'index.html',
		template: 'src/template.html'
	}),
];
export const output = {
	filename: '[name].js',
	path: resolve(__dirname, 'dist'),
	clean: true,
};
export const module = {
	rules: [
		{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader',
			],
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		},
	],
};
export const optimization = {
	runtimeChunk: 'single'
};
