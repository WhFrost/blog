import webpack from 'webpack';
import {BuildOptions} from './types/types';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
	const {paths} = options;
	return {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	};
}
