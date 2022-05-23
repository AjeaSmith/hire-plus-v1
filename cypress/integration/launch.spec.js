describe('Launch Page', () => {
	it('renders the launch page', () => {
		cy.visit('http://localhost:3001');
		cy.contains('For Employers');
	});
});
