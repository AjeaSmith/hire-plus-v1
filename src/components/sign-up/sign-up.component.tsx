import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router';
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
	const navigate = useNavigate();

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
				resetFormFields();
				navigate('/app');
			})
			.catch((error) => {
				console.log('sign up error', error);
				dispatch(resetError());
				resetFormFields();
			});
	};
	return (
		<div className="items-center px-5 mt-5">
			<div className="flex flex-col w-full max-w-md p-6 mx-auto transition duration-500 ease-in-out transform rounded-lg md:mt-0 secondary-bg-color">
				<div>
					<div className="mb-8 mt-4">
						<h1 className="text-2xl lg:text-3xl text-center">
							Don't have an account?
						</h1>
						<p className="text-center font-normal my-2 font-color">
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
									className="block text-sm font-medium font-color"
								>
									Name
								</label>
								<div className="mt-2">
									<input
										value={displayName}
										onChange={handleChange}
										id="name"
										name="displayName"
										type="text"
										autoComplete="current-name"
										required
										placeholder="Enter your name"
										className="primary-bg-color block w-full px-5 py-3 text-base text-neutral-400 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium font-color"
								>
									{' '}
									Email address{' '}
								</label>
								<div className="mt-2">
									<input
										value={email}
										onChange={handleChange}
										id="email"
										name="email"
										type="email"
										autoComplete="current-email"
										required
										placeholder="Enter your email"
										className="primary-bg-color block w-full px-5 py-3 text-base text-neutral-400 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
									/>
								</div>
							</div>
							<div className="space-y-1">
								<label
									htmlFor="password"
									className="block text-sm font-medium font-color"
								>
									{' '}
									Password{' '}
								</label>
								<div className="mt-2">
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
										className="primary-bg-color block w-full px-5 py-3 text-base text-neutral-400 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
									/>
								</div>
							</div>
							<div className="space-y-1">
								<label
									htmlFor="confirmPassword"
									className="block text-sm font-medium font-color"
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
										className="primary-bg-color block w-full px-5 py-3 text-base text-neutral-400 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
									/>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="accent-color-bg flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									{isLoading ? (
										<div className="text-center z-index">
											<BeatLoader color={'white'} loading={true} />
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
	);
};

export default Signup;
