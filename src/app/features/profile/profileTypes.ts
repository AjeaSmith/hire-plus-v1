export type ProfileData = {
	id: string;
	email: string;
	createdAt: number;
	headline: string;
	isForHire: boolean;
	websiteURL: string;
	skills: string[];
	summary: string;
	projects: ProjectData[];
	experience: ExperienceData[];
};
export type ExperienceData = {
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
	isForHire: boolean;
	websiteURL: string;
	skills: string[];
	experience: ExperienceData[];
	projects: ProjectData[];
};
