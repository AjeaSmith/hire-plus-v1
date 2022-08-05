import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJobById, getJobs } from '../../../utils/firebase/firebase.utils';
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
export const getPostedJobById = createAsyncThunk(
	'job/getJobById',
	async (id: string) => {
		const jobs = await getJobById(id);
		const [jobObj] = jobs;
		return JSON.stringify(jobObj);
	}
);

const JobSlice = createSlice({
	name: 'job',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPostedJobs.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPostedJobs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.jobs = JSON.parse(action.payload);
			})
			.addCase(getPostedJobs.rejected, (state, action) => {
				state.isLoading = false;
				console.log('error with jobs', action.error);
			})
			.addCase(getPostedJobById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPostedJobById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.jobs = JSON.parse(action.payload);
			})
			.addCase(getPostedJobById.rejected, (state, action) => {
				state.isLoading = false;
				console.log('error with getting job by id', action.error);
			});
	},
});

export default JobSlice.reducer;
