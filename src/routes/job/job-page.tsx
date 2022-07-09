import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { getPostedJobs } from '../../app/features/job/jobSlice';
import { JobData } from '../../app/features/job/jobTypes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Job from '../../components/job/job-component';

const JobsPage = () => {
	const dispatch = useAppDispatch();
	const { jobs, isLoading } = useAppSelector((state) => state.job);
	const [searchInput, setSearchInput] = useState<string>('');
	const [filteredData, setfilteredData] = useState<JobData[]>([]);
	useEffect(() => {
		dispatch(getPostedJobs());
	}, []);
	const searchItems = (value: string) => {
		setSearchInput(value);
		if (searchInput !== '') {
			const filtered = jobs.filter((item) => {
				return Object.values(item)
					.join('')
					.toLowerCase()
					.includes(searchInput.toLowerCase());
			});
			setfilteredData(filtered);
		} else {
			setfilteredData(jobs);
		}
	};
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
									value={searchInput}
									onChange={(e) => searchItems(e.target.value)}
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
								{searchInput.length
									? filteredData.map((job, index) => {
											return <Job job={job} key={index} />;
									  })
									: jobs.map((job, index) => {
											return <Job job={job} key={index} />;
									  })}
							</div>
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default JobsPage;
