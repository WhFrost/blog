import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import {BuildOptions} from './types/types';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const {isDev} = options;

	const tsLoader = {
		test: /\.tsx?$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					getCustomTransformers: () => ({
						before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
					}),
					transpileOnly: isDev,
				},
			},
		],
	};

	const swcLoader = {
		test: /\.m?js$/,
		exclude: /(node_modules)/,
		use: {
			// `.swcrc` can be used to configure swc
			loader: 'swc-loader',
		},
	};

	const cssLoader = {
		loader: 'css-loader',
		options: {
			sourceMap: isDev ? true : false,
			modules: {
				namedExport: false,
				localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
			},
		},
	};

	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			cssLoader,
			// Compiles Sass to CSS
			'sass-loader',
		],
	};

	const svgLoader = {
		test: /\.svg$/i,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
					typescript: true,
					ext: 'tsx',
					svgoConfig: {
						plugins: [
							{
								name: 'convertColors',
								params: {
									currentColor: true,
								},
							},
						],
					},
				},
			},
		],
	};

	const assetLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
		generator: {
			filename: 'assets/img/[hash][ext][query]',
		},
	};

	const fontsLoader = {
		test: /\.(woff|woff2|eot|ttf|otf)$/i,
		type: 'asset/resource',
		generator: {
			filename: 'assets/fonts/[hash][ext][query]',
		},
	};

	return [assetLoader, fontsLoader, svgLoader, scssLoader, tsLoader];
}
