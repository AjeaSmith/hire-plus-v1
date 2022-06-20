import { useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { getPostedJobs } from '../../app/features/job/jobSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const JobsPage = () => {
	const dispatch = useAppDispatch();
	const { jobs, isLoading } = useAppSelector((state) => state.job);
	useEffect(() => {
		dispatch(getPostedJobs());
	}, []);
	console.log(jobs);
	return (
		<>
			{isLoading ? (
				<div className="text-center p-20">
					<BeatLoader color="#ffffff" />
				</div>
			) : (
				<>
					<div className="flex justify-center pt-20">
						<div className="mb-3 w-1/2">
							<div className="input-group relative flex items-stretch w-full mb-4">
								<input
									type="search"
									className="form-control relative flex-auto min-w-0 block w-full px-5 py-3 text-base font-normal font-color secondary-bg-color bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-200 focus:secondary-bg-color focus:border-indigo-700 focus:outline-none"
									placeholder="Search for a job..."
									aria-label="Search"
									aria-describedby="button-addon2"
								/>
							</div>
						</div>
					</div>
					<section className="text-gray-600 body-font overflow-hidden">
						<div className="container px-5 py-24 mx-auto">
							<div className="-my-8 divide-y-2 divide-gray-700">
								{jobs.map((job, index) => {
									return (
										<div
											className="py-8 flex flex-wrap md:flex-nowrap"
											key={index}
										>
											<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
												<span className="font-semibold title-font text-indigo-500">
													{job.company_name.toUpperCase()}
												</span>
												<span className="mt-1 font-color text-sm">
													{job.datePosted}
												</span>
											</div>
											<div className="md:flex-grow">
												<h2 className="text-2xl font-medium text-white title-font mb-2">
													{job.position}{' '}
													<span className="text-indigo-500 text-sm">
														({job.location}) - ({job.job_type})
													</span>
												</h2>
												<p className="leading-relaxed font-color">
													{job.job_description}
												</p>
												<a
													href={job.apply_url}
													className="text-indigo-700 inline-flex items-center mt-4 mr-4"
												>
													Learn More
													<svg
														className="w-4 h-4 ml-2"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth="2"
														fill="none"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M5 12h14"></path>
														<path d="M12 5l7 7-7 7"></path>
													</svg>
												</a>
												<a className="text-indigo-700 inline-flex items-center mt-4">
													View Job Poster
													<svg
														className="w-4 h-4 ml-2"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth="2"
														fill="none"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M5 12h14"></path>
														<path d="M12 5l7 7-7 7"></path>
													</svg>
												</a>
											</div>
										</div>
									);
								})}
								<div className="py-8 flex flex-wrap md:flex-nowrap">
									<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
										<span className="font-semibold title-font text-indigo-500">
											CATEGORY
										</span>
										<span className="mt-1 font-color text-sm">12 Jun 2019</span>
									</div>
									<div className="md:flex-grow">
										<h2 className="text-2xl font-medium text-white title-font mb-2">
											Meditation bushwick direct trade taxidermy shaman{' '}
											<span className="text-sm text-indigo-500">(Remote)</span>
										</h2>
										<p className="leading-relaxed font-color">
											Glossier echo park pug, church-key sartorial biodiesel
											vexillologist pop-up snackwave ramps cornhole. Marfa 3
											wolf moon party messenger bag selfies, poke vaporware
											kombucha lumbersexual pork belly polaroid hoodie portland
											craft beer.
										</p>
										<a className="text-indigo-700 inline-flex items-center mt-4 mr-4">
											Learn More
											<svg
												className="w-4 h-4 ml-2"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M5 12h14"></path>
												<path d="M12 5l7 7-7 7"></path>
											</svg>
										</a>
										<a className="text-indigo-700 inline-flex items-center mt-4">
											View Job Poster
											<svg
												className="w-4 h-4 ml-2"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M5 12h14"></path>
												<path d="M12 5l7 7-7 7"></path>
											</svg>
										</a>
									</div>
								</div>
								<div className="py-8 flex flex-wrap md:flex-nowrap">
									<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
										<span className="font-semibold title-font text-indigo-500">
											CATEGORY
										</span>
										<span className="text-sm font-color">12 Jun 2019</span>
									</div>
									<div className="md:flex-grow">
										<h2 className="text-2xl font-medium text-white title-font mb-2">
											Woke master cleanse drinking vinegar salvia{' '}
											<span className="text-sm text-indigo-500">
												(Michigan)
											</span>
										</h2>
										<p className="leading-relaxed font-color">
											Glossier echo park pug, church-key sartorial biodiesel
											vexillologist pop-up snackwave ramps cornhole. Marfa 3
											wolf moon party messenger bag selfies, poke vaporware
											kombucha lumbersexual pork belly polaroid hoodie portland
											craft beer.
										</p>
										<a className="text-indigo-700 inline-flex items-center mt-4 mr-4">
											Learn More
											<svg
												className="w-4 h-4 ml-2"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M5 12h14"></path>
												<path d="M12 5l7 7-7 7"></path>
											</svg>
										</a>
										<a className="text-indigo-700 inline-flex items-center mt-4">
											View Job Poster
											<svg
												className="w-4 h-4 ml-2"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M5 12h14"></path>
												<path d="M12 5l7 7-7 7"></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default JobsPage;
