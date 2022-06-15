import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getProfile } from '../../../utils/firebase/firebase.utils';
import { ProfileData } from './profileTypes';

interface userState {
	profile: ProfileData;
	isLoading: boolean;
	isEditting: boolean;
	successMessage: string;
}
const initialState: userState = {
	profile: {
		id: '',
		email: '',
		displayName: '',
		createdAt: Date.now(),
		title: '',
		isForHire: false,
		websiteURL: '',
		githubUrl: '',
		yearsOfExperience: 0,
		skills: [],
		summary: '',
		projects: [],
		experience: [
			{
				company: '',
				position: '',
				positionSummary: '',
				date: '',
			},
		],
	},
	isLoading: false,
	isEditting: false,
	successMessage: '',
};

// -------- PROFILE ACTIONS --------------------------------
export const getProfileById = createAsyncThunk(
	'profile/getProfileById',
	async (id: string) => {
		const profile = await getProfile(id);
		const [profileObj] = profile;
		return JSON.stringify(profileObj);
	}
);
const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setEditView(state, action) {
			state.isEditting = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProfileById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProfileById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.profile = JSON.parse(action.payload);
			})
			.addCase(getProfileById.rejected, (state, action) => {
				state.isLoading = false;
				console.log('error with profile', action.error);
			});
	},
});

export const { setEditView } = profileSlice.actions;

export default profileSlice.reducer;
