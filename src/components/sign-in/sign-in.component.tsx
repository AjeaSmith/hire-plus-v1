import { useState } from 'react';
import './sign-in.styles';
import { ButtonContainer, Header, SignInContainer } from './sign-in.styles';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignIn: React.FunctionComponent = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [errorMessage, setErrorMessage] = useState('');
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const loginWithGoogle = async () => {
		// sign in with google
		resetFormFields();
	};
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};
	return (
		<SignInContainer>
			<Header>Already have an account?</Header>
			<p style={{ marginTop: 0 }}>Sign in with your email and password</p>
			<span
				style={{ color: 'red', fontStyle: 'italic', fontWeight: 'bold' }}
			>
				{errorMessage}
			</span>
			<form>
				<input
					type="email"
					name="email"
					required
					value={email}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					required
					value={password}
					onChange={handleChange}
				/>
				<ButtonContainer>
					<button type="submit">Sign in</button>
					<button type="button">Google Sign In</button>
				</ButtonContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;
