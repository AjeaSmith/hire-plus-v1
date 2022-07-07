export type CompanyData = {
	id: string;
	companyName: string;
	companyDescription: string;
	companyUrl: string;
	email: string;
	isHiring: boolean;
	companySize: string;
	jobs: Jobs[];
};
export type Jobs = {
	position: string;
	location: string;
	salary: string;
	datePosted: string;
	jobType: string;
	applyUrl: string;
	description: string;
	companyName: string;
};
