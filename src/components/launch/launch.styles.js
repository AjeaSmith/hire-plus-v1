import styled from 'styled-components';
export const Wrapper = styled.section`
	background-color: #5b3fd1;
`;
export const LaunchWrapper = styled.section`
	display: flex;
	padding: 0 2.5em;
	height: 75vh;
	justify-content: center;
`;
export const Logo = styled.div`
	padding: 2.5em;
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 4em;
	color: #fff;
`;
export const ForEmployers = styled.section`
	padding-right: 2em;
	height: 70%;
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-right: 2px solid rgb(44 21 140 / 30%);
`;
export const ForEmployees = styled.section`
	width: 40%;
	padding-left: 2em;

	height: 70%;
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const Header = styled.h2`
	font-size: 32px;
	font-weight: bold;
    color: #fff;
    margin-bottom: 0;
`;
export const Text = styled.p`
	text-align: center;
	line-height: 1.4em;
    font-size: 20px;
    font-weight: 400;
	color: rgba(255, 255, 255, 0.7);
`;
export const Button = styled.button`
	display: inline-block;
	border-radius: 3px;
	padding: 0.7rem 0;
	width: 11rem;
	background: #f7578c;
	color: #fff;
	border: none;
	font-weight: bold;
	font-size: 15px;
    cursor: pointer;
    margin: 1em 0;

	&:hover {
		background: rgb(189 54 99 / 80%);
	}
`;
