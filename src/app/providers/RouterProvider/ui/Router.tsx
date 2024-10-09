import {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import {appRoutes} from '../lib/routes';
import App from 'app/App';
import {MainPage} from 'pages/MainPage';
import {ProjectsPage} from 'pages/ProjectsPage';

const routes = [
	{
		path: appRoutes.root,
		element: (
			<ThemeProvider>
				<App />
			</ThemeProvider>
		),
		children: [
			{
				path: appRoutes.main,
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<MainPage />
					</Suspense>
				),
			},
			{
				path: appRoutes.project,
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<ProjectsPage />
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);
