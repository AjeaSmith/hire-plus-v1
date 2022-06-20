import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { TagsInput } from 'react-tag-input-component';
import {
	setEditView,
	updateProfileById,
} from '../../app/features/profile/profileSlice';
import {
	ExperienceData,
	ProjectData,
} from '../../app/features/profile/profileTypes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Experience from '../experience/experience-component';
import ExperiencePopupModal from '../modal/experience-modal.component';
import ProjectPopupModal from '../modal/project-modal.component';
import Project from '../project/project-component';

const EditProfile = () => {
	const { profile, isEditting } = useAppSelector((state) => state.profile);

	const [formFields, setFormFields] = useState({
		headline: profile.headline ? profile.headline : '',
		summary: profile.summary ? profile.summary : '',
	});

	const [experienceData, setExperienceData] = useState<ExperienceData[]>(
		profile.experience ? profile.experience : []
	);

	const [skills, setSkills] = useState<string[]>(
		profile.skills ? profile.skills : []
	);

	const [isOpen, setIsOpen] = useState(false);
	const [isProjOpen, setIsProjOpen] = useState(false);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const settingEditView = () => {
		dispatch(setEditView(!isEditting));
	};

	const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	const onTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setFormFields({ ...formFields, summary: event.target.value });
	};

	const updateProfile = async () => {
		dispatch(
			updateProfileById({
				id: profile.id,
				headline: formFields.headline,
				summary: formFields.summary,
				skills: skills,
				experience: experienceData,
				projects: profile.projects,
			})
		);
		dispatch(setEditView(false));
		navigate('/app');
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const closeProjModal = () => {
		setIsProjOpen(false);
	};

	return (
		<>
			<section style={{ backgroundColor: '#252731' }}>
				<div className="container mx-auto py-5 text-right text-white">
					<button
						onClick={updateProfile}
						className="mr-2 text-lg text-indigo-500"
					>
						Update
					</button>
					<button onClick={settingEditView}>Go Back</button>
				</div>
				<div className="md:px-12 lg:px-24 max-w-7xl relative items-center w-full px-5 py-5 mx-auto">
					<div className="mx-auto flex flex-col w-full max-w-lg mb-12 text-center">
						<p className="mb-5 font-medium text-2xl text-white">
							{profile.displayName}
						</p>
						<img
							alt="testimonial"
							className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full"
							src="https://picsum.photos/200"
						/>
						<div>
							<input
								className="font-color primary-bg-color input-border-color block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none autoexpand"
								id="headline"
								value={formFields.headline}
								onChange={onHandleChange}
								name="headline"
								placeholder="Add headline..."
							/>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="divide-y divide-gray-700">
					<section className="text-gray-600 body-font mt-2">
						<div className="container px-5 py-20 mx-auto">
							<div className="flex flex-col w-full mx-auto">
								<div className="w-full mx-auto">
									<h2 className="sm:text-3xl text-2xl my-5 font-bold">
										About Me
									</h2>
									<div>
										<textarea
											maxLength={4000}
											rows={5}
											className="font-color input-border-color secondary-bg-color block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none autoexpand"
											id="summary"
											name="summary"
											value={formFields.summary}
											onChange={onTextAreaChange}
											placeholder="Message..."
										></textarea>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="text-gray-600 body-font overflow-hidden">
						<div className="container px-5 py-20 mx-auto">
							<div className="flex flex-col w-full mx-auto">
								<div className="w-full mx-auto">
									<h2 className="sm:text-3xl text-2xl mb-5 font-bold">
										Skills
									</h2>
									<TagsInput
										value={skills}
										onChange={setSkills}
										name="skills"
										placeHolder="Add skills here..."
									/>
								</div>
							</div>
						</div>
					</section>
					{/* Experience starts */}
					<section className="text-gray-600 body-font overflow-hidden">
						<div className="container px-5 py-20 mx-auto">
							<div className="-my-8 mx-auto">
								<h2 className="sm:text-3xl text-2xl my-5 font-bold">
									Experience
								</h2>
								<button
									onClick={() => setIsOpen(true)}
									className="block mb-10 text-white bg-indigo-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
									type="button"
									data-modal-toggle="defaultModal"
								>
									Add Experience
								</button>
								<ExperiencePopupModal
									isOpen={isOpen}
									closeModal={closeModal}
									setExperienceData={setExperienceData}
								/>

								{experienceData.length ? (
									<ol className="border-l-2 border-indigo-700">
										{experienceData.map((exp, index) => {
											return <Experience experience={exp} key={index} />;
										})}
									</ol>
								) : null}
							</div>
						</div>
					</section>
					{/* Projects starts */}
					<section className="text-gray-600 body-font">
						<div className="container px-5 py-24 mx-auto">
							<div className="text-left mb-10">
								<h2 className="sm:text-3xl text-2xl font-bold title-font mb-5">
									Projects
								</h2>
								<button
									onClick={() => setIsProjOpen(true)}
									className="block text-white bg-indigo-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
									type="button"
									data-modal-toggle="defaultModal"
								>
									Add Project
								</button>
								<ProjectPopupModal
									isProjOpen={isProjOpen}
									closeProjModal={closeProjModal}
								/>
							</div>
							<div className="flex flex-wrap -m-4">
								{profile.projects.length
									? profile.projects.map((project, index) => {
											return (
												<Project
													project={project}
													key={index}
													itemIndex={index}
												/>
											);
									  })
									: null}
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	);
};

export default EditProfile;
