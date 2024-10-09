import webpack from 'webpack';
import {BuildOptions} from './types/types';
import {buildPlugins} from './buildPlugins';
import {buildResolvers} from './buildResolvers';
import {buildLoaders} from './buildLoaders';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(
	options: BuildOptions,
): webpack.Configuration {
	const {mode, paths, isDev} = options;

	const config: webpack.Configuration = {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true,
			chunkFilename: '[name].[contenthash].js',
		},
		module: {
			rules: buildLoaders(options),
		},
		plugins: buildPlugins(options),
		resolve: buildResolvers(options),
		devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
		devServer: isDev ? buildDevServer(options) : undefined,
	};

	return config;
}
