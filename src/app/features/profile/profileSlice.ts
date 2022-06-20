import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
	getProfile,
	updateUserProfileById,
} from '../../../utils/firebase/firebase.utils';
import { ProfileData, updatedData } from './profileTypes';

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
		headline: '',
		isForHire: false,
		websiteURL: '',
		skills: [],
		summary: '',
		projects: [],
		experience: [],
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
export const updateProfileById = createAsyncThunk(
	'profile/updateProfileById',
	async (data: updatedData): Promise<void> => {
		const { id } = data;
		await updateUserProfileById(id, data);
	}
);
const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setEditView(state, action) {
			state.isEditting = action.payload;
		},
		setProjects(state, action) {
			state.profile.projects = action.payload;
		},
		setExperiences(state, action) {
			state.profile.experience = action.payload;
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

export const { setEditView, setProjects, setExperiences } =
	profileSlice.actions;

export default profileSlice.reducer;
