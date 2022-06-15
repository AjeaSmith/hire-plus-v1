import { Outlet } from 'react-router';
import Navigation from '../../components/navigation/navigation.component';

const HomePage = () => {
	return (
		<div>
			<Navigation />
			<Outlet />
		</div>
	);
};

export default HomePage;
