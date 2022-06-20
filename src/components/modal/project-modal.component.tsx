import React, { ChangeEvent, useState } from 'react';
import { setProjects } from '../../app/features/profile/profileSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

interface ProjectPopupModalProps {
	isProjOpen: boolean;
	closeProjModal: () => void;
}

const ProjectPopupModal: React.FC<ProjectPopupModalProps> = ({
	isProjOpen,
	closeProjModal,
}) => {
	const dispatch = useAppDispatch();

	const { profile } = useAppSelector((state) => state.profile);

	const [projectFields, setProjectFields] = useState({
		date: '',
		title: '',
		summary: '',
		github: '',
		projectUrl: '',
	});

	const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProjectFields({ ...projectFields, [name]: value });
	};
	const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = e.target;
		setProjectFields({ ...projectFields, summary: value });
	};
	const addProject = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(
			setProjects([
				...profile.projects,
				{
					date: projectFields.date,
					title: projectFields.title,
					summary: projectFields.summary,
					github: projectFields.github,
					projectUrl: projectFields.projectUrl,
				},
			])
		);
		setProjectFields(projectFields);
		closeProjModal();
	};
	return (
		<div
			className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute right-0 bottom-0 left-0 h-screen"
			id="modal"
			style={{ display: `${isProjOpen ? 'block' : 'none'}`, top: '850px' }}
		>
			<div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
				<div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
					<div className="w-full flex justify-center text-gray-600 mb-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-wallet"
							width="52"
							height="52"
							viewBox="0 0 24 24"
							strokeWidth="1"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" />
							<path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
							<path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
						</svg>
					</div>
					<h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-center text-lg">
						Add Project
					</h1>
					<form onSubmit={addProject}>
						<label
							htmlFor="name"
							className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
						>
							Project Name
						</label>
						<input
							type="text"
							required
							name="title"
							onChange={onHandleChange}
							value={projectFields.title}
							id="name"
							className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
							placeholder="Full stack react"
						/>
						{/* Project Date */}
						<label
							htmlFor="date"
							className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
						>
							Date
						</label>
						<div className="relative mb-5 mt-2">
							<div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-calendar-event"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<rect x="4" y="5" width="16" height="16" rx="2" />
									<line x1="16" y1="3" x2="16" y2="7" />
									<line x1="8" y1="3" x2="8" y2="7" />
									<line x1="4" y1="11" x2="20" y2="11" />
									<rect x="8" y="15" width="2" height="2" />
								</svg>
							</div>
							<input
								name="date"
								onChange={onHandleChange}
								value={projectFields.date}
								id="date"
								className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
								placeholder="MM/YY"
							/>
						</div>
						{/* project github */}
						<label
							htmlFor="github"
							className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
						>
							Project Github
						</label>
						<input
							type="text"
							name="github"
							onChange={onHandleChange}
							value={projectFields.github}
							id="github"
							className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
							placeholder="www.projectOne@github.com"
							required
						/>
						<label
							htmlFor="projectUrl"
							className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
						>
							Project URL
						</label>
						<input
							name="projectUrl"
							onChange={onHandleChange}
							value={projectFields.projectUrl}
							id="projectUrl"
							className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
							placeholder="www.coolwebapp.com"
							required
						/>
						<label
							htmlFor="description"
							className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
						>
							Project Summary
						</label>
						<textarea
							name="summary"
							onChange={onTextareaChange}
							value={projectFields.summary}
							maxLength={300}
							id="description"
							className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full flex items-center px-3 py-3 text-sm border-gray-300 rounded border"
							placeholder="Authentication, testing, etc."
							required
						/>
						<div className="flex items-center justify-start w-full">
							<button
								type="submit"
								className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
							>
								Submit
							</button>
							<button
								onClick={closeProjModal}
								className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
							>
								Cancel
							</button>
						</div>
					</form>
					<button
						className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
						aria-label="close modal"
						onClick={closeProjModal}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-x"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							strokeWidth="2.5"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" />
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectPopupModal;
