Cypress.Commands.add('validateJsonSchema',(response,schemaFile ) => {
    cy.task('validateJsonSchema', {
        data:           response.body,
        verbose:        true,
        schemaFile:     schemaFile,
    }).should('equal', null);
})
