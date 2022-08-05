import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCompanyById } from '../../../utils/firebase/firebase.utils';
import { CompanyData } from './companyTypes';

interface companyState {
	company: CompanyData;
	isLoading: boolean;
}
const initialState: companyState = {
	company: {
		id: '',
		companyName: '',
		companyDescription: '',
		companyUrl: '',
		email: '',
		isHiring: false,
		companySize: '',
		jobs: [],
	},
	isLoading: false,
};

export const getCompany = createAsyncThunk(
	'job/getCompanyById',
	async (id: string) => {
		const company = await getCompanyById(id);
		const [companyObj] = company;
		return JSON.stringify(companyObj);
	}
);

const companySlice = createSlice({
	name: 'job',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCompany.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getCompany.fulfilled, (state, action) => {
				state.isLoading = false;
				state.company = JSON.parse(action.payload);
			})
			.addCase(getCompany.rejected, (state, action) => {
				state.isLoading = false;
				console.log('error with company data', action.error);
			});
	},
});

export default companySlice.reducer;
