import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import Launch from './routes/launch/launch-page';
import AuthPage from './routes/auth/auth-page';
import { setCurrentUser } from './app/features/user/userSlice';
import { onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import SignIn from './components/sign-in/sign-in.component';
import Signup from './components/sign-up/sign-up.component';
import NoMatch from './routes/noMatch/NoMatch';

function App() {
	const dispatch = useAppDispatch();
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
			<Routes>
				<Route index element={<Launch />} />
				<Route path="auth/employees" element={<AuthPage />}>
					<Route path="signin" element={<SignIn />} />
					<Route path="signup" element={<Signup />} />
				</Route>
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</>
	);
}

export default App;
