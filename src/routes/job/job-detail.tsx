import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BeatLoader from 'react-spinners/BeatLoader';
import { getPostedJobById } from '../../app/features/job/jobSlice';
import { JobData } from '../../app/features/job/jobTypes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const JobDetail = () => {
	const { id } = useParams();
	const [jobData, setjobData] = useState<JobData>({} as JobData);
	const { isLoading } = useAppSelector((state) => state.job);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getPostedJobById(id))
			.unwrap()
			.then((val) => {
				setjobData(JSON.parse(val));
			});
	}, [dispatch]);

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
									{jobData.position}
								</p>
								<div>
									<span className="font-color">
										{jobData.location} - {jobData.salary}
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
												<p className="font-color">{jobData.description}</p>
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
												<p className="font-color">{jobData.jobType}</p>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default JobDetail;
