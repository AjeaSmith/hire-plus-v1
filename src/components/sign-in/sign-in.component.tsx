import { ChangeEvent, FormEvent, useState } from 'react';
import googleIcon from '../../assets/icons/google.png';
import {
	signInEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
	email: '',
	password: '',
};
const SignIn: React.FunctionComponent = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// login with firebase
		await signInEmailAndPassword(email, password);
	};
	const signInGooglePopup = async () => {
		await signInWithGooglePopup();
	};

	return (
		<section>
			<div className="items-center px-5">
				<div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
					<h1 className="text-2xl lg:text-3xl text-center">
						Already have an account?
					</h1>
					<p className="text-center font-normal my-2">
						Sign in with your email and password
					</p>
					<div className="mt-8">
						<div className="mt-6">
							<form className="space-y-6" onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-neutral-600"
									>
										{' '}
										Email address{' '}
									</label>
									<div className="mt-1">
										<input
											onChange={handleChange}
											value={email}
											name="email"
											type="email"
											autoComplete="current-email"
											required
											placeholder="Enter your email"
											className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
										/>
									</div>
								</div>
								<div className="space-y-1">
									<label
										htmlFor="password"
										className="block text-sm font-medium text-neutral-600"
									>
										{' '}
										Password{' '}
									</label>
									<div className="mt-1">
										<input
											minLength={6}
											onChange={handleChange}
											value={password}
											name="password"
											type="password"
											autoComplete="current-password"
											required
											placeholder="********"
											className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
										/>
									</div>
								</div>
								<div>
									<button
										style={{ backgroundColor: '#5b3fd1' }}
										type="submit"
										className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
									>
										Sign in
									</button>
								</div>
							</form>
							<div className="relative my-4">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300"></div>
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 text-neutral-600 bg-white">
										Or continue with
									</span>
								</div>
							</div>
							<div>
								<button
									onClick={signInGooglePopup}
									className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
								>
									<div className="flex items-center justify-center">
										<img
											src={googleIcon}
											alt="gmail"
											style={{ width: '24px', height: '24px' }}
										/>
										<span className="ml-4"> Log in with Google</span>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
