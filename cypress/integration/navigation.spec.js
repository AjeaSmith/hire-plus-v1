/* eslint-disable no-undef */
describe('Navigation', () => {
	before(() => {
		cy.visit('http://localhost:3001/auth/employees/signup');
	});
	it('navigates to sign in component', () => {
		cy.contains('SIGN IN').click();
		cy.contains('Already have an account?');
	});
});
