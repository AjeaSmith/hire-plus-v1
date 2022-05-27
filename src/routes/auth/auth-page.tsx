import SignIn from '../../components/sign-in/sign-in.component';
import { useParams } from 'react-router-dom';
import Signup from '../../components/sign-up/sign-up.component';

const AuthPage: React.FunctionComponent = () => {
	const {userSelect} = useParams();
	console.log(userSelect);
	return (
		<section className="text-gray-600 body-font">
			<div className="container flex flex-wrap px-5 mx-auto items-center justify-center">
				<div className="md:w-1/2 md:pr-5 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 border-b border-gray-200">
					<SignIn />
				</div>
				<div className="flex flex-col md:w-1/2">
					<Signup />
				</div>
			</div>
		</section>
	);
};

export default AuthPage;
