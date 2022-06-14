import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import Launch from './routes/launch/launch-page';
import { setCurrentUser, setSignedIn } from './app/features/user/userSlice';
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
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(async (user) => {
			if (user) {
				const { displayName, uid } = user;
				dispatch(setSignedIn(true));
				dispatch(setCurrentUser({ displayName, uid }));
			} else {
				dispatch(setSignedIn(false));
				dispatch(setCurrentUser({}));
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
				<Route path="/jobs" element={<JobsPage />} />
				<Route path="auth/employees/sign-in" element={<SignIn />} />
				<Route path="auth/employees/sign-up" element={<Signup />} />
				<Route
					path="user/profile/:id"
					element={
						<PrivateRoute>
							<ProfilePage />
						</PrivateRoute>
					}
				/>
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</>
	);
}

export default App;
