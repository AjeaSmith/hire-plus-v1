import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { signoutUser } from '../../app/features/user/userSlice';
import logo from '../../assets/plus.svg';

const Navigation = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isSignedIn, currentUser } = useAppSelector((state) => state.users);

	const logout = () => {
		try {
			dispatch(signoutUser())
				.unwrap()
				.then(() => {
					navigate('auth/employees/');
				});
		} catch (error) {
			console.log('from logout', error);
		}
	};
	return (
		<header className="logo sticky top-0 z-10 border-b-2 border-gray-700 px-10 py-5">
			<div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
				<a href="https://hire-plus-v1.vercel.app/" className="mr-2">
					<img src={logo} alt="logo" style={{ height: '75px' }} />
				</a>
				<Link
					to="/app"
					className="flex title-font font-bold items-center mb-4 md:mb-0 text-md"
				>
					{isSignedIn && currentUser.displayName ? (
						<span> {currentUser.displayName}</span>
					) : null}
				</Link>

				{isSignedIn ? (
					<>
						<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
							<Link to="/app" className="mr-5 hover:text-gray-500">
								Jobs
							</Link>
							<Link
								to={`user/profile/${currentUser.uid}`}
								className="mr-5 hover:text-gray-500"
							>
								Profile
							</Link>
						</nav>
						<button
							onClick={logout}
							className="bg-indigo-700 inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 text-white"
						>
							Logout
						</button>
					</>
				) : (
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link to="/app" className="mr-5 hover:text-gray-500">
							JOBS
						</Link>
						<Link to="auth/employees" className="mr-5 hover:text-gray-500">
							SIGN IN
						</Link>
						<Link
							to="auth/employees/sign-up"
							className="mr-5 hover:text-gray-500"
						>
							SIGN UP
						</Link>
					</nav>
				)}
			</div>
		</header>
	);
};
export default Navigation;
