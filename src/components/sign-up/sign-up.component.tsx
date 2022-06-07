import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import {
	resetError,
	signUpUserEmailAndPassword,
	setSignupError,
} from '../../app/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const Signup = (): ReactElement => {
	const dispatch = useAppDispatch();

	const { isLoading, signUpError } = useAppSelector((state) => state.users);

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password, displayName, confirmPassword } = formFields;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			dispatch(setSignupError('Passwords must match'));
			return;
		}
		dispatch(
			signUpUserEmailAndPassword({
				email,
				password,
				displayName,
			})
		)
			.unwrap()
			.then(() => {
				dispatch(resetError());
				resetFormFields();
				// redirect to home page
			})
			.catch((error) => {
				console.log(error);
				resetFormFields();
			});
	};
	return (
		<section>
			<div className="items-center px-5">
				<div className="flex flex-col w-full max-w-md mx-auto transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
					<div>
						<div className="mb-12 mt-4">
							<h1 className="text-2xl lg:text-3xl text-center">
								Don't have an account?
							</h1>
							<p className="text-center font-normal my-2 text-neutral-600">
								Sign up with your email and password
							</p>
						</div>
						{signUpError && (
							<div className="text-center text-red-600 mb-5 text-lg">
								{signUpError}
							</div>
						)}
						<div>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-neutral-600"
									>
										Name
									</label>
									<div className="mt-1">
										<input
											value={displayName}
											onChange={handleChange}
											id="name"
											name="displayName"
											type="text"
											autoComplete="current-name"
											required
											placeholder="Enter your name"
											className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
										/>
									</div>
								</div>
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
											value={email}
											onChange={handleChange}
											id="email"
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
											onChange={handleChange}
											value={password}
											minLength={6}
											id="password"
											name="password"
											type="password"
											autoComplete="current-password"
											required
											placeholder="********"
											className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
										/>
									</div>
								</div>
								<div className="space-y-1">
									<label
										htmlFor="confirmPassword"
										className="block text-sm font-medium text-neutral-600"
									>
										{' '}
										Confirm Password{' '}
									</label>
									<div className="mt-1">
										<input
											onChange={handleChange}
											value={confirmPassword}
											minLength={6}
											id="confirmPassword"
											name="confirmPassword"
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
										{isLoading ? (
											<div className="text-center z-index">
												<BeatLoader
													color={'white'}
													loading={true}
												/>
											</div>
										) : (
											<p>Sign up</p>
										)}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signup;
