import { Outlet } from 'react-router-dom';
import { ReactElement } from 'react';
import Navigation from '../../components/navigation/navigation.component';

const AuthPage = (): ReactElement => {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
};

export default AuthPage;
