import { JobData } from '../job/jobTypes';
export type CompanyData = {
	id: string;
	companyName: string;
	companyDescription: string;
	companyUrl: string;
	email: string;
	isHiring: boolean;
	companySize: string;
	jobs: JobData[];
};