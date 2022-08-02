import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import profileReducer from './features/profile/profileSlice';
import jobReducer from './features/job/jobSlice';
import companyReducer from './features/company/companySlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		profile: profileReducer,
		job: jobReducer,
		company: companyReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch;
