import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import BeatLoader from 'react-spinners/BeatLoader';
type PrivateProps = {
	children: React.ReactNode;
};

const PrivateRoute: FC<PrivateProps> = ({ children }) => {
	const { isSignedIn } = useAppSelector((state) => state.users);

	if (!isSignedIn)
		return (
			<div className="text-center p-20">
				<BeatLoader color="#ffffff" />
			</div>
		);

	if (isSignedIn) {
		return <>{children}</>;
	}
	return <Navigate to="/auth/employees/sign-in" />;
};

export default PrivateRoute;
