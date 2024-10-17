import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {BuildOptions} from './types/types';

export function buildPlugins(
	options: BuildOptions,
): webpack.WebpackPluginInstance[] {
	const {paths, isDev, analyzer} = options;
	const plugins: webpack.WebpackPluginInstance[] = [];

	plugins.push(
		new HtmlWebpackPlugin({template: paths.html, favicon: paths.public}),
		new webpack.DefinePlugin({
			__IS_DEV__: isDev,
		}),
	);

	if (isDev) {
		plugins.push(
			new webpack.ProgressPlugin(),
			new ForkTsCheckerWebpackPlugin(),
			new ReactRefreshWebpackPlugin(),
		);
	}
	if (!isDev) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			}),
			new CopyPlugin({
				patterns: [{from: paths.localesEntry, to: paths.localesOutput}],
			}),
		);
	}
	if (analyzer) {
		plugins.push(new BundleAnalyzerPlugin());
	}

	return plugins;
}
