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
					<section key={profile.id}>
						<div className="divide-y divide-gray-700">
							<section className="text-gray-600 body-font mt-2">
								<div className="container px-5 py-20 mx-auto">
									<div className="flex flex-col w-full max-w-4xl mx-auto">
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
								<div className="container px-5 py-20 mx-auto">
									<div className="flex flex-col w-full max-w-4xl mx-auto">
										<div className="w-full mx-auto">
											<h2 className="sm:text-3xl text-2xl mb-5 font-bold">
												Skills
											</h2>
											{profile.skills.length ? (
												<ul className="flex flex-wrap skills-menu">
													{profile.skills.map((skill, id) => {
														return (
															<li
																className="mr-2 my-2 text-white px-4 py-2 rounded-3xl"
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
								<div className="container px-5 py-20 mx-auto">
									<div className="-my-8 divide-y-2 divide-gray-700 max-w-4xl mx-auto">
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
								<div className="container px-5 py-24 mx-auto max-w-3xl">
									<div className="flex flex-col text-left w-full">
										<h2 className="sm:text-3xl text-2xl font-bold title-font">
											Projects
										</h2>
									</div>
									{profile.projects.length ? (
										<div className="flex flex-wrap -m-4 mt-10">
											{profile.projects.map((proj, index) => {
												return (
													<div className="lg:w-1/3 sm:w-1/2 p-4" key={index}>
														<div className="flex relative z-0">
															<img
																alt="gallery"
																className="absolute inset-0 w-full h-full object-cover object-center"
																src="https://picsum.photos/300/300"
															/>
															<div className="px-8 py-10 relative z-10 w-full border-4 bg-card opacity-0 hover:opacity-100">
																<h2 className="tracking-widest text-sm title-font font-medium mb-1 accent-color">
																	{proj.date}
																</h2>
																<h1 className="title-font text-lg font-medium mb-3">
																	{proj.title}
																</h1>
																<p className="leading-relaxed font-color">
																	{proj.summary}
																</p>
																<div className="flex justify-start mt-3 acccent-color text-md accent-color font-medium">
																	<a
																		href={proj.github}
																		target="_blank"
																		rel="noreferrer"
																		className="mr-5"
																	>
																		SOURCE CODE
																	</a>
																	<a
																		href={proj.projectUrl}
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
											})}
										</div>
									) : (
										<p className="font-color pt-5">
											Edit profile to add Projects
										</p>
									)}
								</div>
							</section>
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default Profile;
