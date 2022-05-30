/* eslint-disable no-undef */
describe('Launch Page', () => {
	before(() => {
		cy.visit('http://localhost:3000');
	});
	it('renders the launch page', () => {
		cy.contains('For Employers');
	});
	it('redirect to auth page', () => {
		cy.contains('GET STARTED').click();
		
		cy.url().should('include', '/auth');
	});
});
