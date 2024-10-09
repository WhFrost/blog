import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {router} from 'app/providers/RouterProvider';

const app = document.getElementById('app');

if (!app) {
	throw new Error('App container not found');
}
const container = createRoot(app);

container.render(<RouterProvider router={router} />);
