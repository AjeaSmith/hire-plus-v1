import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import AuthPage from './routes/auth/auth-page';
import Launch from './components/launch/launch.component';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Launch />} />
				<Route path="/auth/employer" element={<AuthPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
