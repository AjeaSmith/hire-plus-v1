import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
	getProfile,
	updateUserProfileById,
} from '../../../utils/firebase/firebase.utils';
import { signoutUser } from '../user/userSlice';
import { ProfileData, UpdatedFields } from './profileTypes';

interface userState {
	profile: ProfileData;
	isLoading: boolean;
	isEditting: boolean;
}
const initialState: userState = {
	profile: {
		id: '',
		email: '',
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
	async (data: UpdatedFields): Promise<void> => {
		await updateUserProfileById(data);
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
			.addCase(signoutUser.fulfilled, (state, action) => {
				state.profile = {
					id: '',
					email: '',
					createdAt: Date.now(),
					headline: '',
					isForHire: false,
					websiteURL: '',
					skills: [],
					summary: '',
					projects: [],
					experience: [],
				};
			})
			.addCase(getProfileById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.profile = JSON.parse(action.payload);
				console.log(action.payload)
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
