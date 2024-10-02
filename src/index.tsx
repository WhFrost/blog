import {createRoot} from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import App from './app/App';
import {ProjectsPage} from '@/pages/ProjectsPage/index';
import {Suspense} from 'react';
import {MainPage} from './pages/MainPage';

const root = document.getElementById('root');

if (!root) {
	throw new Error('root container not found');
}
const container = createRoot(root);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/main',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<MainPage />
					</Suspense>
				),
			},
			{
				path: '/projects',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<ProjectsPage />
					</Suspense>
				),
			},
		],
	},
]);

container.render(<RouterProvider router={router} />);
