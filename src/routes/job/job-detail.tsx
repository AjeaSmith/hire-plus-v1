import { useEffect } from 'react';
import { useParams } from 'react-router';
import BeatLoader from 'react-spinners/BeatLoader';
import { getPostedJobs } from '../../app/features/job/jobSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

interface JobDetailProps {}

const JobDetail: React.FC<JobDetailProps> = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { jobs, isLoading } = useAppSelector((state) => state.job);

	useEffect(() => {
		dispatch(getPostedJobs());
	}, [id]);

	const data = jobs.find((val) => val.id === id);

	return (
		<>
			{isLoading ? (
				<BeatLoader />
			) : (
				<>
					<section style={{ backgroundColor: '#252731' }}>
						<div className="md:px-12 lg:px-24 max-w-7xl relative items-center w-full px-5 py-20 mx-auto">
							<div className="mx-auto flex flex-col w-full max-w-lg text-center">
								<p className="mb-5 font-medium text-3xl text-white">
									{data.position}
								</p>
								<div>
									<span className='font-color'>
										{data.location} | {data.salary}
									</span>
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
											<h2 className="xs:text-3xl text-2xl my-5 font-bold">
												Job Description
											</h2>
											<div>
												<p className="font-color">{data.description}</p>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section className="text-gray-600 body-font mt-2">
								<div className="container px-5 py-20 mx-auto">
									<div className="flex flex-col w-full mx-auto">
										<div className="w-full mx-auto">
											<h2 className="xs:text-3xl text-2xl my-5 font-bold">
												Job-Type
											</h2>
											<div>
												<p className="font-color">{data.jobType}</p>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/* <section className="text-gray-600 body-font">
								<div className="container px-5 py-24 mx-auto">
									<div className="text-left mb-5">
										<h2 className="sm:text-3xl text-2xl font-bold title-font mb-5">
											Jobs
										</h2>
										<button
											onClick={openModal}
											className="block text-white bg-indigo-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
											type="button"
											data-modal-toggle="defaultModal"
										>
											Add Job
										</button>
										<AddJobModal />
									</div>
									<p className="mb-5 font-color">
										Be sure to <b>'Update'</b> for these changes to take effect
										:)
									</p>
									<div className="flex flex-wrap -m-4">
										{company.jobs.length
											? company.jobs.map((job, index) => {
													return (
														<Job
															job={job}
															key={index}
															itemIndex={index}
															removeItem={removeItem}
														/>
													);
											  })
											: null}
									</div>
								</div>
							</section> */}
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default JobDetail;
