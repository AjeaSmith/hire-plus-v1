import { ChangeEvent, useState } from 'react';
import { TagsInput } from 'react-tag-input-component';
import { setEditView } from '../../app/features/profile/profileSlice';
import {
	ExperienceData,
	ProjectData,
} from '../../app/features/profile/profileTypes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateProfileById } from '../../utils/firebase/firebase.utils';
import ExperiencePopupModal from '../modal/experience-modal.component';
import ProjectPopupModal from '../modal/project-modal.component';

const defaultFormFields = {
	title: '',
	summary: '',
};

const EditProfile = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);
	const [projectData, setProjectData] = useState<ProjectData[]>([]);

	const [skills, setSkills] = useState<string[]>([]);

	const [isOpen, setIsOpen] = useState(false);
	const [isProjOpen, setIsProjOpen] = useState(false);

	const dispatch = useAppDispatch();
	const { profile, isEditting } = useAppSelector((state) => state.profile);

	const settingEditView = () => {
		dispatch(setEditView(!isEditting));
	};

	const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	const onTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setFormFields({ ...formFields, [formFields.summary]: event.target.value });
	};

	const updateClick = async () => {
		await updateProfileById(profile.id, { ...formFields });
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
				<div className="px-12 py-5 text-right text-white">
					<button onClick={updateClick} className="underline mr-2">
						Update
					</button>
					<button onClick={settingEditView} className="underline">
						Back to preview
					</button>
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
								id="title"
								value={formFields.title}
								onChange={onHandleChange}
								name="title"
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
							<div className="flex flex-col w-full max-w-4xl mx-auto">
								<div className="w-full mx-auto">
									<h2 className="sm:text-3xl text-2xl my-5 font-bold">
										About Me
									</h2>
									<div>
										<textarea
											maxLength={4000}
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
							<div className="flex flex-col w-full max-w-4xl mx-auto">
								<div className="w-full mx-auto">
									<h2 className="sm:text-3xl text-2xl mb-5 font-bold">
										Skills
									</h2>
									<TagsInput
										value={skills}
										onChange={setSkills}
										name="skills"
										placeHolder="Add skill here..."
									/>
								</div>
							</div>
						</div>
					</section>
					{/* Experience starts */}
					<section className="text-gray-600 body-font overflow-hidden">
						<div className="container px-5 py-20 mx-auto">
							<div className="-my-8 divide-y-2 divide-gray-700 max-w-4xl mx-auto">
								<h2 className="sm:text-3xl text-2xl my-8 font-bold">
									Experience
								</h2>

								<button
									onClick={() => setIsOpen(true)}
									className="block mb-5 text-white accent-color-bg focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
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

								{experienceData.length
									? experienceData.map((exp, index) => {
											return (
												<div
													className="py-8 flex flex-wrap md:flex-nowrap"
													key={index}
												>
													<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
														<span className="font-semibold title-font text-white">
															{exp.company.toUpperCase()}
														</span>
														<span className="mt-1 accent-color text-md">
															{exp.date}
														</span>
													</div>
													<div className="md:flex-grow">
														<h2 className="text-2xl font-medium title-font mb-2">
															{exp.position}
														</h2>
														<p className="leading-relaxed font-color">
															{exp.positionSummary}
														</p>
													</div>
												</div>
											);
									  })
									: null}
							</div>
						</div>
					</section>
					{/* Projects starts */}
					<section className="text-gray-600 body-font">
						<div className="container px-5 py-24 mx-auto max-w-3xl">
							<div className=" text-left mb-20">
								<h2 className="sm:text-3xl text-2xl font-bold title-font mb-5">
									Projects
								</h2>
								<button
									onClick={() => setIsProjOpen(true)}
									className="block mb-5 text-white accent-color-bg focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
									type="button"
									data-modal-toggle="defaultModal"
								>
									Add Project
								</button>
								<ProjectPopupModal
									isProjOpen={isProjOpen}
									closeProjModal={closeProjModal}
									setProjectData={setProjectData}
								/>
								{/* <p className="lg:w-2/3 leading-relaxed text-base font-color">
									Whatever cardigan tote bag tumblr hexagon brooklyn
									asymmetrical gentrify, subway tile poke farm-to-table. Franzen
									you probably haven't heard of them man bun deep jianbing
									selfies heirloom.
								</p> */}
							</div>
							<div className="flex flex-wrap -m-4">
								{projectData.length
									? projectData.map((project, index) => {
											return (
												<div className="lg:w-1/3 sm:w-1/2 p-4" key={index}>
													<div className="flex relative z-0">
														<img
															alt="gallery"
															className="absolute inset-0 w-full h-full object-cover object-center"
															src="https://dummyimage.com/600x360"
														/>
														<div className="px-8 py-10 relative z-10 w-full border-4 bg-card opacity-0 hover:opacity-100">
															<h2 className="tracking-widest text-sm title-font font-medium mb-1 accent-color">
																THE DATE
															</h2>
															<h1 className="title-font text-lg font-medium mb-3">
																{project.title}
															</h1>
															<p className="leading-relaxed font-color">
																{project.summary}
															</p>
															<div className="flex justify-start mt-3 acccent-color text-md accent-color font-medium">
																<a
																	href={project.github}
																	target="_blank"
																	rel="noreferrer"
																	className="mr-5"
																>
																	SOURCE CODE
																</a>
																<a
																	href={project.projectUrl}
																	rel="noreferrer"
																	target="_blank"
																>
																	VIEW LIVE
																</a>
															</div>
														</div>
													</div>
												</div>
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
