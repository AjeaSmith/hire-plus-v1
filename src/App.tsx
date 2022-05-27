import { Routes, Route } from 'react-router-dom';
import Launch from './components/launch/launch.component';
import Navigation from './components/navigation/navigation.component';
import AuthPage from './routes/auth/auth-page';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Launch />} />
				<Route path="auth/:userSelect" element={<AuthPage />} />
			</Routes>
		</>
	);
}

export default App;
