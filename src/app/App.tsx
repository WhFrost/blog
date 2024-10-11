import {Link, Outlet} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from './providers/ThemeProvider';
import {
	AppRoutes,
	AppRoutesPaths,
} from 'shared/config/configRouter/configRouter';

function App() {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={`app ${theme}`}>
			<Link to={AppRoutesPaths[AppRoutes.MAIN]}>MainPage</Link>
			<Link to={AppRoutesPaths[AppRoutes.USER]}>UserPage</Link>
			<h1>Title</h1>
			<p>test styles</p>
			<button onClick={toggleTheme}>{theme}</button>
			<Outlet />
		</div>
	);
}

export default App;
