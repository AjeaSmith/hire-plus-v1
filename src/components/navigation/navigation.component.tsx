import { ReactElement } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { signoutUser } from '../../app/features/user/userSlice';

const Navigation = (): ReactElement => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const currentUser = useAppSelector((state) => state.users.currentUser);

	const logout = () => {
		try {
			dispatch(signoutUser());
			navigate('/auth/employees/signin');
		} catch (error) {
			console.log('from logout', error);
		}
	};
	return (
		<header className="logo sticky top-0 z-10">
			<div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
				<Link
					to="/"
					className="flex title-font font-bold items-center mb-4 md:mb-0"
				>
					Hire{' '}
					<span style={{ color: '#4338CA' }} className="mr-1">
						+Plus
					</span>
					{currentUser && <span>| {currentUser}</span>}
				</Link>

				{currentUser ? (
					<>
						<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
							<Link to="/jobs" className="mr-5 hover:text-gray-900">
								Jobs
							</Link>
							<Link
								to="user/profile"
								className="mr-5 hover:text-gray-900"
							>
								Profile
							</Link>
						</nav>
						<button
							style={{ backgroundColor: '#4338CA' }}
							onClick={logout}
							className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-white"
						>
							Logout
						</button>
					</>
				) : (
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link to="signin" className="mr-5 hover:text-gray-900">
							SIGN IN
						</Link>
						<Link to="signup" className="mr-5 hover:text-gray-900">
							SIGN UP
						</Link>
					</nav>
				)}
			</div>
		</header>
	);
};
export default Navigation;
