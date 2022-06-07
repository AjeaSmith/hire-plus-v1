import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
	signInWithGooglePopup,
	signInEmailAndPassword,
	signUpEmailAndPassword,
	logoutUser,
} from '../../../utils/firebase/firebase.utils';
import { SignUpFields, LoginFields } from './userTypes';

interface userState {
	currentUser: string;
	isLoading: boolean;
	signUpError: string;
	signInError: string;
	successMessage: string;
}
const initialState: userState = {
	currentUser: '',
	isLoading: false,
	signUpError: '',
	signInError: '',
	successMessage: '',
};

// async actions
export const signInWithGoogle = createAsyncThunk(
	'user/signInWithGoogle',
	async () => {
		await signInWithGooglePopup();
	}
);
export const signInWithEmailAndPassword = createAsyncThunk(
	'user/signInEmailAndPassword',
	async (formFields: LoginFields) => {
		const { user } = await signInEmailAndPassword(
			formFields.email,
			formFields.password
		);
		return JSON.stringify(user.displayName);
	}
);
export const signUpUserEmailAndPassword = createAsyncThunk(
	'user/signUpUserEmailAndPassword',
	async (formFields: SignUpFields) => {
		return await signUpEmailAndPassword(formFields);
	}
);

export const signoutUser = createAsyncThunk('user/signoutUser', async () => {
	return await logoutUser();
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// sync actions
		setCurrentUser(state, action) {
			state.currentUser = JSON.parse(action.payload);
		},
		setSignupError(state, action) {
			state.signUpError = action.payload;
		},
		resetError(state) {
			state.signInError = '';
			state.signUpError = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signInWithGoogle.rejected, (state, action) => {
				console.log('something went wrong', action.error);
			})
			.addCase(signInWithEmailAndPassword.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signInWithEmailAndPassword.fulfilled, (state) => {
				state.isLoading = false;
				state.successMessage = 'Logged in successfully';
			})
			.addCase(signInWithEmailAndPassword.rejected, (state) => {
				state.isLoading = false;
				state.signInError = 'User does not exist in the database';
			})
			.addCase(signUpUserEmailAndPassword.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signUpUserEmailAndPassword.fulfilled, (state) => {
				state.isLoading = false;
				state.successMessage = 'Logged in successfully';
			})
			.addCase(signUpUserEmailAndPassword.rejected, (state) => {
				state.isLoading = false;
				state.signUpError = 'User already exist, try logging in';
			})
			.addCase(signoutUser.fulfilled, (state) => {
				state.isLoading = false;
				state.currentUser = '';
			});
	},
});

export const { setCurrentUser, resetError, setSignupError } = userSlice.actions;
export default userSlice.reducer;
