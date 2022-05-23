import {
	Button,
	LaunchWrapper,
	Wrapper,
	Logo,
	ForEmployees,
	ForEmployers,
	Text,
	Header,
} from './launch.styles';
const Launch: React.FunctionComponent = () => {
	return (
		<Wrapper>
			<Logo>
				Hire <span style={{ color: '#f7578c' }}>+Plus</span>
			</Logo>
			<LaunchWrapper>
				<ForEmployers>
					<Header>For Employers</Header>
					<Text>
						Easily search and view candidates, manage candidates <br />
						through our Project Management board, best of all post jobs
						for free!
					</Text>
					<Button>
						GET STARTED
						<span style={{ marginLeft: '10px' }}>&#10095;</span>
					</Button>
				</ForEmployers>
				<ForEmployees>
					<Header>For Employees</Header>
					<Text>
						View the latest jobs posted by hiring companies, create and
						manage your profile to show off skills, and apply for jobs you
						want!
					</Text>
					<Button>
						GET STARTED
						<span style={{ marginLeft: '10px' }}>&#10095;</span>
					</Button>
				</ForEmployees>
			</LaunchWrapper>
		</Wrapper>
	);
};

export default Launch;
