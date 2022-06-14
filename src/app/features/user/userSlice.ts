import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
	signInWithGooglePopup,
	signInEmailAndPassword,
	signUpEmailAndPassword,
	logoutUser,
} from '../../../utils/firebase/firebase.utils';
import { getProfileById } from '../profile/profileSlice';
import { SignUpFields, LoginFields } from './userTypes';

interface userState {
	isSignedIn: boolean;
	currentUser: { uid: string; displayName: string };
	isLoading: boolean;
	signUpError: string;
	signInError: string;
	successMessage: string;
}
const initialState: userState = {
	isSignedIn: false,
	currentUser: { uid: '', displayName: '' },
	isLoading: false,
	signUpError: '',
	signInError: '',
	successMessage: '',
};

// async actions

// ------- USER ACTIONS --------------------------------
export const signInWithGoogle = createAsyncThunk(
	'user/signInWithGoogle',
	async () => {
		await signInWithGooglePopup();
	}
);
export const signInWithEmailAndPassword = createAsyncThunk(
	'user/signInEmailAndPassword',
	async (formFields: LoginFields) => {
		return await signInEmailAndPassword(
			formFields.email,
			formFields.password
		);
	}
);
export const signUpUserEmailAndPassword = createAsyncThunk(
	'user/signUpUserEmailAndPassword',
	async (formFields: SignUpFields) => {
		const user = await signUpEmailAndPassword(formFields);
		return JSON.stringify(user);
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
		setSignedIn(state, action) {
			state.isSignedIn = action.payload;
		},
		setSignupError(state, action) {
			state.signUpError = action.payload;
		},
		setCurrentUser(state, action) {
			state.currentUser = action.payload;
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
			.addCase(signInWithGoogle.fulfilled, (state, action) => {
				state.isLoading = false;
			})
			// ---------- SIGN IN ACTIONS ------------
			.addCase(signInWithEmailAndPassword.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signInWithEmailAndPassword.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSignedIn = true;
				state.successMessage = 'Logged in successfully';
			})
			.addCase(signInWithEmailAndPassword.rejected, (state) => {
				state.isLoading = false;
				state.signInError = 'User does not exist in the database';
			})
			// ----------- SIGN UP ACTIONS ------------
			.addCase(signUpUserEmailAndPassword.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signUpUserEmailAndPassword.fulfilled, (state) => {
				state.isLoading = false;
				state.isSignedIn = true;
				state.successMessage = 'Logged in successfully';
			})
			.addCase(signUpUserEmailAndPassword.rejected, (state) => {
				state.isLoading = false;
				state.signUpError = 'User already exist, try logging in';
			})
			.addCase(signoutUser.fulfilled, (state) => {
				state.isLoading = false;
				state.isSignedIn = false;
			});
	},
});

export const { setCurrentUser, resetError, setSignupError, setSignedIn } =
	userSlice.actions;

export default userSlice.reducer;
