/// <reference types="cypress" />

describe('Cypress Grep Tag Demo Google Search', {tags: ['@google_search']}, ()=> {

    beforeEach(()=> {
        cy.visit('https://www.google.ca/');
    });

    it('Search keyword: test', { tags: ['@smoke'] }, () => {
        cy.get('input[name="q"').should('be.visible').type('test {Enter}');
    });

    it('Search keyword: cypress', { tags: ['@regression'] }, () => {
        cy.get('input[name="q"').should('be.visible').type('cypress {Enter}');
    });

    it('Search keyword: samsung', { tags: ['@integration', '@regression'] }, () => {
        cy.get('input[name="q"').should('be.visible').type('samsung {Enter}');
    });
});