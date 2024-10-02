import {Link, Outlet} from 'react-router-dom';
import {Button} from '@/shared/button/Button';

function App() {
	return (
		<div>
			<Link to={'/main'}>MainPage</Link>
			<Link to={'/projects'}>ProjectsPage</Link>
			<Outlet />
			<Button text={'Test'} />
		</div>
	);
}

export default App;
