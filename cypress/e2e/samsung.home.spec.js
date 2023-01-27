/// <reference types="cypress" />

describe('Cypress Grep Tag Demo Samsung Home Page', {tags: ['@samsung_home']}, ()=> {

    beforeEach(()=> {
        cy.visit('https://www.samsung.com/ca/');
    });

    it('Click button: search', { tags: ['@regression'] }, () => {
        cy.get('button[an-la="shop"').should('be.visible').click();
    });

    it('Click button: mobile', { tags: ['@smoke', '@regression'] }, () => {
        cy.get('button[an-la="mobile"').should('be.visible').click();
    });

    it('Click button: TV & AV', { tags: ['@integration', '@regression'] }, () => {
        cy.get('button[an-la="tv and av"').should('be.visible').click();
    });
});