export type LoginFields = {
	email: string;
	password: string;
};
export type SignUpFields = {
	displayName: string;
	email: string;
	password: string;
};
export type ProfileData = {
	id: string;
	email: string;
	displayName: string;
	createdAt: number;
	title: string;
	isForHire: Boolean;
	websiteURL: string;
	githubUrl: string;
	yearsOfExperience: number;
	skills: String[];
	summary: string;
	projects: [];
	experience: [];
};
