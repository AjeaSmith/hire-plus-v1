export type ProfileData = {
	id: string;
	email: string;
	displayName: string;
	createdAt: number;
	headline: string;
	isForHire: boolean;
	websiteURL: string;
	githubUrl: string;
	yearsOfExperience: number;
	skills: string[];
	summary: string;
	projects: ProjectData[];
	experience: ExperienceData[];
};
export type ExperienceData = {
	company: string;
	date: string;
	position: string;
	positionSummary: string;
};
export type ProjectData = {
	date: string;
	title: string;
	summary: string;
	github: string;
	projectUrl: string;
};

export type updatedData = {
	id: string;
	headline: string;
	summary: string;
	skills: string[];
	experience: ExperienceData[];
	projects: ProjectData[];
};
