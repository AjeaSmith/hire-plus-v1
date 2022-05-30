/* eslint-disable no-undef */
describe('Authentication for employees', () => {
	before(() => {
		cy.visit('http://localhost:3000/auth/employees');
	});
	it('should show the login component', () => {
		cy.contains('Already have an account?');
	});
	it('should show the sign up component', () => {
		cy.contains("Don't have an account?");
	});
});
describe('Authentication for employer', () => {
	before(() => {
		cy.visit('http://localhost:3000/auth/employer');
	});
	it('should show the login component', () => {
		cy.contains('Already have an account?');
	});
	it('should show the sign up component', () => {
		cy.contains("Don't have an account?");
	});
});
