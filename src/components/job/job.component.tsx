import React from 'react';
import { Link } from 'react-router-dom';
import { JobData } from '../../app/features/job/jobTypes';
import { truncateString } from '../../utils/truncateString';

interface JobProps {
	job: JobData;
}

const Job: React.FC<JobProps> = ({ job }) => {
	return (
		<div className="py-8 flex flex-wrap md:flex-nowrap">
			<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
				<span className="font-semibold title-font text-indigo-500">
					{job.companyName.toUpperCase()}
				</span>
				<span className="mt-1 font-color text-sm">{job.datePosted}</span>
			</div>
			<div className="md:flex-grow">
				<h2 className="text-2xl font-medium text-white title-font mb-2">
					{job.position}{' '}
					<span className="text-indigo-500 text-sm">
						({job.location}) - ({job.jobType})
					</span>
				</h2>
				<p className="leading-relaxed font-color max-w-3xl">
					{truncateString(job.description, 250)}
				</p>
				<a
					href={job.applyUrl}
					className="text-indigo-500 inline-flex items-center mt-4 mr-4"
				>
					APPLY NOW
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
				<Link
					to={`job/${job.id}`}
					className="text-indigo-500 inline-flex items-center mt-4 mr-3"
				>
					VIEW JOB
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
				</Link>
				<Link
					to={`company/${job.id}`}
					className="text-indigo-500 inline-flex items-center mt-4"
				>
					VIEW COMPANY
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
				</Link>
			</div>
		</div>
	);
};

export default Job;
