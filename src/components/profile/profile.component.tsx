import { setEditView } from '../../app/features/profile/profileSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Experience from '../experience/experience-component';
import Project from '../project/project-component';

const Profile = () => {
	const dispatch = useAppDispatch();
	const { profile, isEditting } = useAppSelector((state) => state.profile);
	const { currentUser } = useAppSelector((state) => state.users);

	const settingEditView = () => {
		dispatch(setEditView(!isEditting));
	};
	return (
		<>
			{profile && (
				<>
					<section style={{ backgroundColor: '#252731' }}>
						<div className="container mx-auto py-5 px-5 md:px-0 text-right text-white flex justify-between">
							<div className="flex justify-center text-md text-slate-200">
								{profile.isForHire ? (
									<p>Actively looking for work</p>
								) : (
									<p>Not currently looking for work</p>
								)}
							</div>
							{currentUser.uid !== profile.id ? null : (
								<button
									onClick={settingEditView}
									className="underline text-md text-indigo-500"
								>
									Edit Profile
								</button>
							)}
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
								<div className="flex justify-center">
									{profile.headline ? (
										<p className="text-base leading-relaxed font-color pr-2">
											{profile.headline}
										</p>
									) : null}
									{profile.websiteURL ? (
										<>
											<a
												href={profile.websiteURL}
												className="text-base leading-relaxed text-indigo-500 border-l-2 border-gray-500 pl-2"
											>
												Live Website
											</a>
										</>
									) : null}
								</div>
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
										<p className="lg:w-3/4 about-me font-color">
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
										) : null}
									</div>
								</div>
							</div>
						</section>
						{/* Experience starts */}
						<section className="text-gray-600 body-font overflow-hidden">
							<div className="container px-10 py-20 mx-auto">
								<div className="-my-8 mx-auto">
									<h2 className="text-3xl my-8 mb-5 font-bold">Experience</h2>
									{profile.experience.length ? (
										<ol className="border-l-2 border-indigo-700">
											{profile.experience.map((exp, index) => {
												return (
													<Experience
														experienceData={exp}
														key={index}
														itemIndex={index}
													/>
												);
											})}
										</ol>
									) : (
										<p className="font-color">No experiences to show</p>
									)}
								</div>
							</div>
						</section>
						{/* Projects starts */}
						<section className="text-gray-600 body-font">
							<div className="container px-10 py-24 mx-auto">
								<h2 className="sm:text-3xl text-2xl font-bold title-font mb-5">
									Projects
								</h2>
								{profile.projects.length ? (
									<div className="container py-5 mx-auto">
										<div className="flex flex-wrap -m-4">
											{profile.projects.map((proj, index) => {
												return (
													<Project
														project={proj}
														key={index}
														itemIndex={index}
													/>
												);
											})}
										</div>
									</div>
								) : (
									<p className="font-color">No projects to show</p>
								)}
							</div>
						</section>
					</div>
				</>
			)}
		</>
	);
};

export default Profile;
