import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import googleIcon from '../../assets/icons/google.png';
import BeatLoader from 'react-spinners/BeatLoader';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	signInWithGoogle,
	signInWithEmailAndPassword,
} from '../../app/features/user/userSlice';
import { resetError } from '../../app/features/user/userSlice';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignIn = (): ReactElement => {
	const { signInError, isLoading } = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		dispatch(signInWithEmailAndPassword(formFields))
			.unwrap()
			.then(() => {
				dispatch(resetError());
				resetFormFields();
				// redirect to home page
			})
			.catch((error) => {
				console.log('sign in error', error);
				resetFormFields();
			});
	};
	const signInGooglePopup = async () => {
		dispatch(signInWithGoogle())
			.unwrap()
			.then(() => {
				resetFormFields();
				dispatch(resetError());
				// redirect to home page
			})
			.catch((error) => {
				console.log('google signin error', error);
			});
	};
	return (
		<div className="items-center px-5">
			<div className="flex flex-col w-full max-w-md p-6 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
				<div>
					<div className="mb-8 mt-4">
						<h1 className="text-2xl lg:text-3xl text-center">
							Already have an account?
						</h1>
						<p className="text-center font-normal my-2 text-neutral-500">
							Sign in with your email and password
						</p>
					</div>
					{signInError && (
						<div className="text-center text-red-600 mb-5 text-lg">
							{signInError}
						</div>
					)}
					<div>
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
									className="flex items-center justify-center w-full px-10 py-4 text-base font-bold text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									{isLoading ? (
										<div className="text-center z-index">
											<BeatLoader color={'white'} loading={true} />
										</div>
									) : (
										<p>Sign in</p>
									)}
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
	);
};

export default SignIn;
