import {Link, Outlet} from 'react-router-dom';
import './styles/index.scss';
import {appRoutes} from 'app/providers/RouterProvider';
import {useTheme} from './providers/ThemeProvider';

function App() {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={`app ${theme}`}>
			<Link to={appRoutes.main}>MainPage</Link>
			<Link to={appRoutes.project}>ProjectsPage</Link>
			<h1>Title</h1>
			<p>test styles</p>
			<button onClick={toggleTheme}>{theme}</button>
			<Outlet />
		</div>
	);
}

export default App;
