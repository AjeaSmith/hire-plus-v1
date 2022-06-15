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
	experience: ExperienceData[];
};
export type ExperienceData = {
	company: string;
	date: string;
	position: string;
	positionSummary: string;
};
