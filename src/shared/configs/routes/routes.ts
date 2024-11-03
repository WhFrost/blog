export const AppRoutes = {
	ROOT: 'root',
	MAIN: 'main',
	USER: 'user',
} as const;

export const AppRoutesPaths = {
	[AppRoutes.ROOT]: '/',
	[AppRoutes.MAIN]: '/main',
	[AppRoutes.USER]: '/user',
};
