import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJobs } from '../../../utils/firebase/firebase.utils';
import { JobData } from './jobTypes';

interface jobState {
	jobs: JobData[];
	isLoading: boolean;
}
const initialState: jobState = {
	jobs: [],
	isLoading: false,
};

export const getPostedJobs = createAsyncThunk('job/getJobs', async () => {
	const jobs = await getJobs();
	return JSON.stringify(jobs);
});

const JobSlice = createSlice({
	name: 'job',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPostedJobs.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getPostedJobs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.jobs = JSON.parse(action.payload);
			})
			.addCase(getPostedJobs.rejected, (state, action) => {
				state.isLoading = false;
				console.log('error with jobs', action.error);
			});
	},
});

export const {} = JobSlice.actions;

export default JobSlice.reducer;
