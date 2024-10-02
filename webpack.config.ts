import webpack from 'webpack';
import path from 'path';
import {buildWebpackConfig} from './config/webpack/buildConfig';
import {BuildEnv, BuildOptions, BuildPaths} from 'config/webpack/types/types';

export default (env: BuildEnv): webpack.Configuration => {
	const mode = env.mode ?? 'development';
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
		favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
	};
	const isDev = mode === 'development';
	const port = env.port ?? 3000;
	const analyzer = env.analyzer ?? false;

	const buildOptions: BuildOptions = {
		mode,
		paths,
		isDev,
		port,
		analyzer,
	};

	const config: webpack.Configuration = buildWebpackConfig(buildOptions);

	return config;
};
