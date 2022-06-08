import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Launch from './routes/launch/launch-page';
import AuthPage from './routes/auth/auth-page';
import { setCurrentUser } from './app/features/user/userSlice';
import { onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import SignIn from './components/sign-in/sign-in.component';
import Signup from './components/sign-up/sign-up.component';
import NoMatch from './routes/noMatch/NoMatch';
import ProfilePage from './routes/profile/profile-page';
import Navigation from './components/navigation/navigation.component';
import JobsPage from './routes/job/job-page';
import PrivateRoute from './components/privateRoute/private-route.component';

function App() {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.users.currentUser);
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(async (user) => {
			if (user) {
				dispatch(setCurrentUser(JSON.stringify(user.displayName)));
			} else {
				console.log('no user signed in');
				dispatch(setCurrentUser(''));
			}
		});
		// runs when the component unmounts
		return unsubscribe;
	}, []);
	return (
		<>
			<Navigation />
			<Routes>
				<Route index element={<Launch />} />
				<Route path="auth/employees" element={<AuthPage />}>
					<Route path="signin" element={<SignIn />} />
					<Route path="signup" element={<Signup />} />
				</Route>
				<Route path="/jobs" element={<JobsPage />} />
				<Route
					path="/user/profile"
					element={
						<PrivateRoute user={user}>
							<ProfilePage />
						</PrivateRoute>
					}
				/>

				{/* <Route path="/user/profile" element={<ProfilePage />} /> */}
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</>
	);
}

export default App;
