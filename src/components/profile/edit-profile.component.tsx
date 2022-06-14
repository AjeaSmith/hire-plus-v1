import React from 'react';

const EditProfile = () => {
	return (
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
										className="font-color secondary-bg-color block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none autoexpand"
										id="description"
										name="description"
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
								skills form
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
							experience form
						</div>
					</div>
				</section>
				{/* Projects starts */}
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto max-w-3xl">
						<div className="flex flex-col text-left w-full mb-20">
							<h2 className="sm:text-3xl text-2xl font-bold title-font mb-5">
								Projects
							</h2>
							<p className="lg:w-2/3 leading-relaxed text-base font-color">
								Whatever cardigan tote bag tumblr hexagon brooklyn
								asymmetrical gentrify, subway tile poke farm-to-table.
								Franzen you probably haven't heard of them man bun deep
								jianbing selfies heirloom.
							</p>
						</div>
						<div className="flex flex-wrap -m-4">
							<div className="lg:w-1/3 sm:w-1/2 p-4">
								<div className="flex relative z-0">
									<img
										alt="gallery"
										className="absolute inset-0 w-full h-full object-cover object-center"
										src="https://dummyimage.com/600x360"
									/>
									<div className="px-8 py-10 relative z-10 w-full border-4 bg-card opacity-0 hover:opacity-100">
										<h2 className="tracking-widest text-sm title-font font-medium mb-1 accent-color">
											THE SUBTITLE
										</h2>
										<h1 className="title-font text-lg font-medium mb-3">
											Shooting Stars
										</h1>
										<p className="leading-relaxed font-color">
											Photo booth fam kinfolk cold-pressed sriracha
											leggings jianbing microdosing tousled
											waistcoat.
										</p>
									</div>
								</div>
							</div>
							<div className="lg:w-1/3 sm:w-1/2 p-4">
								<div className="flex relative z-0">
									<img
										alt="gallery"
										className="absolute inset-0 w-full h-full object-cover object-center"
										src="https://dummyimage.com/601x361"
									/>
									<div className="px-8 py-10 relative z-10 w-full border-4 bg-card opacity-0 hover:opacity-100">
										<h2 className="tracking-widest text-sm title-font font-medium accent-color mb-1">
											THE SUBTITLE
										</h2>
										<h1 className="title-font text-lg font-medium mb-3">
											The Catalyzer
										</h1>
										<p className="leading-relaxed font-color">
											Photo booth fam kinfolk cold-pressed sriracha
											leggings jianbing microdosing tousled
											waistcoat.
										</p>
									</div>
								</div>
							</div>
							<div className="lg:w-1/3 sm:w-1/2 p-4">
								<div className="flex relative z-0">
									<img
										alt="gallery"
										className="absolute inset-0 w-full h-full object-cover object-center"
										src="https://dummyimage.com/603x363"
									/>
									<div className="px-8 py-10 relative z-10 w-full border-4 bg-card opacity-0 hover:opacity-100">
										<h2 className="tracking-widest text-sm title-font font-medium accent-color mb-1">
											THE SUBTITLE
										</h2>
										<h1 className="title-font text-lg font-medium mb-3">
											The 400 Blows
										</h1>
										<p className="leading-relaxed font-color">
											Photo booth fam kinfolk cold-pressed sriracha
											leggings jianbing microdosing tousled
											waistcoat.
										</p>
									</div>
								</div>
							</div>
							<div className="lg:w-1/3 sm:w-1/2 p-4">
								<div className="flex relative z-0">
									<img
										alt="gallery"
										className="absolute inset-0 w-full h-full object-cover object-center"
										src="https://dummyimage.com/602x362"
									/>
									<div className="px-8 py-10 relative z-10 w-full border-4 bg-card opacity-0 hover:opacity-100">
										<h2 className="tracking-widest text-sm title-font font-medium accent-color mb-1">
											THE SUBTITLE
										</h2>
										<h1 className="title-font text-lg font-medium mb-3">
											Neptune
										</h1>
										<p className="leading-relaxed font-color">
											Photo booth fam kinfolk cold-pressed sriracha
											leggings jianbing microdosing tousled
											waistcoat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default EditProfile;
