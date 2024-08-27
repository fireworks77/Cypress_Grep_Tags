/// <reference types="cypress" />

describe('Cypress Grep Tag Demo Database Tests', {tags: ['@database']}, ()=> {

    it('checks a record should exist in menu table', { tags: ['@smoke'] }, () => {
        const query = "SELECT * FROM menu WHERE name = 'Stake'; ";
        cy.task('queryDatabase', { query: query }).then((queryResponse) => {
            // Log the query response
            cy.log('Query Response:', queryResponse);
    
            // Ensure verification code was fetched successfully
            expect(queryResponse).to.not.be.null;

        });
    });


});

