/// <reference types="cypress" />

import * as helpers from '../e2e/pages/common/helpers';

describe('Cypress Grep Tag Demo Google Search', {tags: ['@google_search']}, ()=> {

    beforeEach(()=> {
        cy.visit('https://www.google.ca/');
    });

    it('Search keyword: test', { tags: ['@smoke'] }, () => {
        const keyword = 'test';
        helpers.interceptRequest('GET', `https://www.google.ca/complete/search?q=${keyword}*`);
        cy.get('textarea[name="q"]').should('be.visible').type(`${keyword} {Enter}`);
        helpers.waitForRequest();
    });

    it('Search keyword: cypress', { tags: ['@regression'] }, () => {
        cy.get('textarea[name="q"]').should('be.visible').type('cypress {Enter}');
    });

    it('Search keyword: samsung', { tags: ['@integration', '@regression'] }, () => {
        cy.get('textarea[name="q"]').should('be.visible').type('apple {Enter}');
    });
});

