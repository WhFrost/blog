import {Outlet} from 'react-router-dom';
import 'shared/styles/index.scss';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import {useTheme} from 'widgets/ThemeSwitcher';

function App() {
	const {theme} = useTheme();

	return (
		<div className={`app ${theme}`}>
			<Navbar />
			<div className='content-page'>
				<Sidebar />
				<div className='page-wrapper'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default App;
