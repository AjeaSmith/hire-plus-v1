import { ReactElement } from 'react';
import { Link, Outlet } from 'react-router-dom';
const Launch = (): ReactElement => {
	return (
		<section className="text-gray-600 body-font">
			<h1 className="text-center text-2xl md:text-4xl my-10">
				What features are you looking for?
			</h1>
			<div className="container px-10 py-5 mx-auto">
				<div className="flex flex-wrap -mx-4 -mb-10 text-center">
					<div className="sm:w-1/2 mb-10 px-4">
						<div className="rounded-lg h-64 overflow-hidden">
							<img
								alt="content"
								className="object-cover object-center h-full w-full"
								src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
							/>
						</div>
						<h2 className="title-font text-2xl font-medium mt-6 mb-3">
							For Employers
						</h2>
						<p className="leading-relaxed text-base font-color">
							Easily search and view candidates, manage candidates through our
							Project Management board, best of all post jobs for free!
						</p>
						<Link to="auth/employers">
							<button className="flex mx-auto mt-6 text-white bg-indigo-700 border-0 py-2 px-5 focus:outline-none rounded">
								GET STARTED
								<span style={{ marginLeft: '10px' }}>&#10095;</span>
							</button>
						</Link>
					</div>
					<div className="sm:w-1/2 mb-10 px-4">
						<div className="rounded-lg h-64 overflow-hidden">
							<img
								alt="content"
								className="object-cover object-center h-full w-full"
								src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
							/>
						</div>
						<h2 className="title-font text-2xl font-medium mt-6 mb-3">
							For Developers
						</h2>
						<p className="leading-relaxed text-base font-color">
							View the latest jobs posted by hiring companies, create and manage
							your profile to show off skills, and apply for jobs you want!
						</p>
						<Link to="/app">
							<button className="flex mx-auto mt-6 text-white bg-indigo-700 border-0 py-2 px-5 focus:outline-none rounded">
								GET STARTED
								<span style={{ marginLeft: '10px' }}>&#10095;</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Outlet />
		</section>
	);
};

export default Launch;
