export type BuildMode = 'development' | 'production';

export interface BuildEnv {
	mode: BuildMode;
	port: number;
	analyzer?: boolean;
}

export interface BuildPaths {
	entry: string;
	output: string;
	html: string;
	src: string;
	favicon: string;
}

export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
	analyzer?: boolean;
}
