import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import Launch from './routes/launch/launch-page';
import { setSignedIn } from './app/features/auth/authSlice';
import { onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import SignIn from './components/sign-in/sign-in.component';
import Signup from './components/sign-up/sign-up.component';
import NoMatch from './routes/noMatch/NoMatch';
import ProfilePage from './routes/profile/profile-page';
import JobsPage from './routes/job/job-page';
import PrivateRoute from './components/privateRoute/private-route.component';
import AuthPage from './routes/auth/auth-page';
import HomePage from './routes/home/home-page';
import CompanyPage from './routes/company/company-page';
import JobDetail from './routes/job/job-detail';

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(async (user) => {
			if (user) {
				const { displayName, uid } = user;
				dispatch(
					setSignedIn({ signedIn: true, currentUser: { uid, displayName } })
				);
			} else {
				dispatch(setSignedIn({ signedIn: false, currentUser: {} }));
			}
		});
		// runs when the component unmounts
		return unsubscribe;
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Launch />} />
				<Route path="/app" element={<HomePage />}>
					<Route index element={<JobsPage />} />
					<Route path="auth/employees" element={<AuthPage />}>
						<Route index element={<SignIn />} />
						<Route path="sign-up" element={<Signup />} />
					</Route>
					<Route
						path="user/profile/:id"
						element={
							<PrivateRoute>
								<ProfilePage />
							</PrivateRoute>
						}
					/>
					<Route path="company/:id" element={<CompanyPage />} />
					<Route path="job/:id" element={<JobDetail />} />
				</Route>
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</>
	);
}

export default App;
