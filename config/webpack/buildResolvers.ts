import webpack from 'webpack';
import {BuildOptions} from './types/types';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
	const {paths} = options;
	return {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@': paths.src,
		},
	};
}
