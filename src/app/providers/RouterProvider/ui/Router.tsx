import {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import {
	AppRoutes,
	AppRoutesPaths,
} from '../../../../shared/config/configRouter/configRouter';
import App from 'app/App';
import {MainPage} from 'pages/MainPage';
import {UserPage} from 'pages/UserPage';
import {ErrorPage} from 'pages/ErrorPage';

const routes = [
	{
		path: AppRoutesPaths[AppRoutes.ROOT],
		element: (
			<ThemeProvider>
				<App />
			</ThemeProvider>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				path: AppRoutesPaths[AppRoutes.MAIN],
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<MainPage />
					</Suspense>
				),
			},
			{
				path: AppRoutesPaths[AppRoutes.USER],
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<UserPage />
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);
