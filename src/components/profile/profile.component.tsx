import { setEditView } from '../../app/features/profile/profileSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Profile = () => {
	const dispatch = useAppDispatch();
	const { profile, isEditting } = useAppSelector((state) => state.profile);
	const settingEditView = () => {
		dispatch(setEditView(!isEditting));
	};
	return (
		<>
			{profile && (
				<>
					<section style={{ backgroundColor: '#252731' }}>
						<div className="container mx-auto py-5 text-right text-white">
							<button onClick={settingEditView} className="underline">
								Edit
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
								<p className="mx-auto text-base leading-relaxed font-color">
									{profile.headline
										? profile.headline
										: 'Edit profile to add a Headline'}
								</p>
							</div>
						</div>
					</section>
					<div className="divide-y divide-gray-700" key={profile.id}>
						<section className="text-gray-600 body-font mt-2">
							<div className="container px-10 py-20 mx-auto">
								<div className="flex flex-col w-full mx-auto">
									<div className="w-full mx-auto">
										<h2 className="sm:text-3xl text-2xl my-5 font-bold">
											About Me
										</h2>
										<p className="w-3/4 about-me font-color">
											{profile.summary
												? profile.summary
												: 'Edit profile to add a About me'}
										</p>
									</div>
								</div>
							</div>
						</section>
						<section className="text-gray-600 body-font overflow-hidden">
							<div className="container px-10 py-20 mx-auto">
								<div className="flex flex-col w-full mx-auto">
									<div className="w-full mx-auto">
										<h2 className="sm:text-3xl text-2xl mb-5 font-bold">
											Skills
										</h2>
										{profile.skills.length ? (
											<ul className="flex flex-wrap">
												{profile.skills.map((skill, id) => {
													return (
														<li
															className="mr-2 my-2 text-white px-4 py-2 rounded-3xl bg-indigo-700 cursor-pointer["
															key={id}
														>
															{skill}
														</li>
													);
												})}
											</ul>
										) : (
											<p className="font-color">Edit profile to add Skills</p>
										)}
									</div>
								</div>
							</div>
						</section>
						{/* Experience starts */}
						<section className="text-gray-600 body-font overflow-hidden">
							<div className="container px-10 py-20 mx-auto">
								<div className="-my-8 divide-y-2 divide-gray-700 mx-auto">
									<h2 className="sm:text-3xl text-2xl my-8 font-bold">
										Experience
									</h2>
									{profile.experience.length ? (
										profile.experience.map((exp, index) => {
											return (
												<div
													className="py-8 flex flex-wrap md:flex-nowrap"
													key={index}
												>
													<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
														<span className="font-semibold title-font text-white">
															{exp.company.toLocaleUpperCase()}
														</span>
														<span className="mt-1 text-indigo-500 text-md">
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
									) : (
										<p className="font-color pt-5">
											Edit profile to add Experience
										</p>
									)}
								</div>
							</div>
						</section>
						{/* Projects starts */}
						<section className="text-gray-600 body-font">
							<div className="container px-10 py-24 mx-auto">
								<div className="flex flex-col text-left w-full mb-5">
									<h2 className="sm:text-3xl text-2xl font-bold title-font">
										Projects
									</h2>
								</div>
								<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
									{profile.projects.length ? (
										profile.projects.map((proj, index) => {
											return (
												<div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={index}>
													<div className="rounded-lg h-64 overflow-hidden">
														<img
															alt="content"
															className="object-cover object-center h-full w-full"
															src="https://picsum.photos/1200"
														/>
													</div>
													<h2 className="text-xl font-medium title-font text-white mt-5">
														{proj.title}
													</h2>
													<p className="text-base leading-relaxed mt-2 font-color">
														{proj.summary}
													</p>
													<div className="flex justify-between">
														<a
															href={proj.github}
															className="text-indigo-500 inline-flex items-center mt-3"
														>
															VIEW CODE
															<svg
																fill="none"
																stroke="currentColor"
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																className="w-4 h-4 ml-2"
																viewBox="0 0 24 24"
															>
																<path d="M5 12h14M12 5l7 7-7 7"></path>
															</svg>
														</a>
														<a
															href={proj.projectUrl}
															className="text-indigo-500 inline-flex items-center mt-3 ml-2"
														>
															VIEW LIVE
															<svg
																fill="none"
																stroke="currentColor"
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																className="w-4 h-4 ml-2"
																viewBox="0 0 24 24"
															>
																<path d="M5 12h14M12 5l7 7-7 7"></path>
															</svg>
														</a>
													</div>
												</div>
											);
										})
									) : (
										<p className="font-color pt-5">
											Edit profile to add Projects
										</p>
									)}
								</div>
							</div>
						</section>
					</div>
				</>
			)}
		</>
	);
};

export default Profile;
