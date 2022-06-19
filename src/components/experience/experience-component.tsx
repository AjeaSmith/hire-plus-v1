import React from 'react';
import { ExperienceData } from '../../app/features/profile/profileTypes';

interface ExperienceProps {
	experience: ExperienceData;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
	return (
		<li >
			<div className="flex flex-start items-center">
				<div className="bg-indigo-700 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
				<h4 className="text-slate-200 font-semibold text-xl -mt-2">
					{experience.position}
				</h4>
			</div>
			<div className="ml-6 mb-6 pb-6">
				<a
					href="#!"
					className="text-indigo-500 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
				>
					{experience.date}
				</a>
				<p className="font-color mt-2 mb-2">{experience.positionSummary}</p>
			</div>
		</li>
	);
};

export default Experience;
