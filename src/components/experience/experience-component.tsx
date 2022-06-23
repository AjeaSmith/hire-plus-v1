import React from 'react';
import { setExperiences } from '../../app/features/profile/profileSlice';
import { ExperienceData } from '../../app/features/profile/profileTypes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

interface ExperienceProps {
	experienceData: ExperienceData;
	itemIndex: number;
}

const Experience: React.FC<ExperienceProps> = ({
	experienceData,
	itemIndex,
}) => {
	const dispatch = useAppDispatch();

	const { profile, isEditting } = useAppSelector((state) => state.profile);

	const removeItem = (id: number) => {
		const newExperiences = profile.experience.slice(0, id);
		dispatch(setExperiences(newExperiences));
	};

	return (
		<li>
			<div className="flex flex-start items-center">
				<div className="bg-indigo-700 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
				<h4 className="text-slate-200 font-semibold text-xl -mt-2">
					{experienceData.position}
				</h4>
			</div>
			<div className="ml-6 mb-6 pb-6">
				<a
					href="#!"
					className="text-indigo-500 hover:text-indigo-700 focus:text-indigo-800 duration-300 transition ease-in-out text-sm"
				>
					{experienceData.date}
				</a>
				<p className="font-color mt-2 mb-2 w-3/4">{experienceData.positionSummary}</p>
				{isEditting ? (
					<button
						onClick={() => removeItem(itemIndex)}
						type="button"
						className="inline-block px-4 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						Remove Experience
					</button>
				) : null}
			</div>
		</li>
	);
};

export default Experience;
