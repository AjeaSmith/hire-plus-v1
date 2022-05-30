import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FunctionComponent = () => {
	return (
		<header className="logo h-16 sticky top-0 z-10">
			<Link to="/">
				Hire <span style={{ color: '#f7578c' }}>+Plus</span>
			</Link>
		</header>
	);
};
export default Navigation;