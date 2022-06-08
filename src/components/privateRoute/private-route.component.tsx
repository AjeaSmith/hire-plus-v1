import { FC } from 'react';
import { Navigate } from 'react-router-dom';
type PrivateProps = {
	user: string;
	children: React.ReactNode;
};

const PrivateRoute: FC<PrivateProps> = ({ user, children }) => {
	if (!user) {
		return <Navigate to="/jobs" />;
	}
	return <>{children}</>;
};

export default PrivateRoute;
