/// <reference types="cypress" />


export const interceptRequest = (method, path) => {
    cy.intercept(method, path).as('interceptRequest');
}

export const waitForRequest = () => {
    cy.wait('@interceptRequest').then(interception => {
        // cy.log(`response data: ${JSON.stringify(interception.response)}`);
        // cy.log(`response data statusCode: ${JSON.stringify(interception.response.statusCode)}`);
        // expect(interception.request.headers.host).contains('www.google.ca');
        expect(interception.response.statusCode).eq(200);
    });
}

