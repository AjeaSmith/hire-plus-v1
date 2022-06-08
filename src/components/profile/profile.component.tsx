import { Link } from 'react-router-dom';

const Profile = () => {
	return (
		<>
			<section style={{ backgroundColor: '#252731' }}>
				<div className="px-12 py-5 text-right text-white">
					<Link to="/job">Edit</Link>
				</div>
				<div className="md:px-12 lg:px-24 max-w-7xl relative items-center w-full px-5 py-5 mx-auto">
					<div className="mx-auto flex flex-col w-full max-w-lg mb-12 text-center">
						<p className="mb-5 font-medium text-2xl text-white">YTDevs</p>
						<img
							alt="testimonial"
							className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full"
							src="https://picsum.photos/200"
						/>
						<p className="mx-auto text-base leading-relaxed font-color">
							Free and Premium themes, UI Kit's, templates and landing
							pages built with Tailwind CSS, HTML &amp; Next.js.
						</p>
					</div>
				</div>
			</section>
			<div className="divide-y divide-gray-700">
				<section className="text-gray-600 body-font mt-2">
					<div className="container px-5 py-20 mx-auto">
						<div className="flex flex-col w-full max-w-4xl mx-auto">
							<div className="w-full mx-auto">
								<h2 className="sm:text-3xl text-2xl my-5 font-bold">
									About Me
								</h2>
								<p className="w-3/4 about-me font-color">
									Right. Say that again. No, no, George, look, it's
									just an act, right? Okay, so 9:00 you're strolling
									through the parking lot, you see us struggling in the
									car, you walk up, you open the door and you say, your
									line, George. Stop it. We're gonna take a little
									break but we'll be back in a while so, don't nobody
									go no where.
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
								<ul className="flex flex-wrap skills-menu">
									<li className="mr-2 my-2 text-white px-4 py-2 rounded-3xl">
										Javascript
									</li>
									<li className="mr-2 my-2 text-white px-4 py-2 rounded-3xl">
										React
									</li>
									<li className="mr-2 my-2 text-white px-4 py-2 rounded-3xl">
										Css
									</li>
									<li className="mr-2 my-2 text-white px-4 py-2 rounded-3xl">
										Express
									</li>
									<li className="mr-2 my-2 text-white px-4 py-2 rounded-3xl">
										Firebase
									</li>
									<li className="mr-2 my-2 text-white px-4 py-2 rounded-3xl">
										Typescript
									</li>
									<li className="mr-2 my-2 text-white px-4 py-2 rounded-3xl">
										Testing Cypress
									</li>
									<li className="mr-2 my-2 text-white px-4 py-2 rounded-3xl">
										Github
									</li>
									<li className="mr-2 my-2 text-white px-4 py-2 rounded-3xl">
										Github
									</li>
									<li className="mr-2 my-2 text-white px-4 py-2 rounded-3xl">
										Github
									</li>
									<li className="mr-2 my-2 text-white px-4 py-2 rounded-3xl">
										Github
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/* Experience starts */}
				<section className="text-gray-600 body-font overflow-hidden">
					<div className="container px-5 py-24 mx-auto">
						<div className="-my-8 divide-y-2 divide-gray-700 max-w-4xl mx-auto">
							<h2 className="sm:text-3xl text-2xl my-10 font-bold">
								Experience
							</h2>
							<div className="py-8 flex flex-wrap md:flex-nowrap">
								<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
									<span className="font-semibold title-font text-white">
										CATEGORY
									</span>
									<span className="mt-1 accent-color text-sm">
										12 Jun 2019
									</span>
								</div>
								<div className="md:flex-grow">
									<h2 className="text-2xl font-medium title-font mb-2">
										Bitters hashtag waistcoat fashion axe chia unicorn
									</h2>
									<p className="leading-relaxed font-color">
										Glossier echo park pug, church-key sartorial
										biodiesel vexillologist pop-up snackwave ramps
										cornhole. Marfa 3 wolf moon party messenger bag
										selfies, poke vaporware kombucha lumbersexual pork
										belly polaroid hoodie portland craft beer.
									</p>
								</div>
							</div>
							<div className="py-8 flex flex-wrap md:flex-nowrap">
								<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
									<span className="font-semibold title-font text-white">
										CATEGORY
									</span>
									<span className="mt-1 accent-color text-sm">
										12 Jun 2019
									</span>
								</div>
								<div className="md:flex-grow">
									<h2 className="text-2xl font-medium title-font mb-2">
										Meditation bushwick direct trade taxidermy shaman
									</h2>
									<p className="leading-relaxed font-color">
										Glossier echo park pug, church-key sartorial
										biodiesel vexillologist pop-up snackwave ramps
										cornhole. Marfa 3 wolf moon party messenger bag
										selfies, poke vaporware kombucha lumbersexual pork
										belly polaroid hoodie portland craft beer.
									</p>
								</div>
							</div>
							<div className="py-8 flex flex-wrap md:flex-nowrap">
								<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
									<span className="font-semibold title-font text-white">
										CATEGORY
									</span>
									<span className="text-sm accent-color">
										12 Jun 2019
									</span>
								</div>
								<div className="md:flex-grow">
									<h2 className="text-2xl font-medium title-font mb-2">
										Woke master cleanse drinking vinegar salvia
									</h2>
									<p className="leading-relaxed font-color">
										Glossier echo park pug, church-key sartorial
										biodiesel vexillologist pop-up snackwave ramps
										cornhole. Marfa 3 wolf moon party messenger bag
										selfies, poke vaporware kombucha lumbersexual pork
										belly polaroid hoodie portland craft beer.
									</p>
								</div>
							</div>
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
		</>
	);
};

export default Profile;
