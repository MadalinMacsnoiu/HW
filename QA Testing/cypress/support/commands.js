Cypress.Commands.add('validateJsonSchema',(response,schemaFile ) => {
    cy.task('validateJsonSchema', {
        data:           response.body,
        verbose:        true,
        schemaFile:     schemaFile,
    }).should('equal', null);
})

Cypress.Commands.add('searchTest',(name) => {
        cy.get('[class="form-control"]').click().type(name)
        cy.get('[class="em em-search"]').click()
})



Cypress.Commands.add('addToBasket',(pnk) => {
    cy.xpath(pnk).click()
})

Cypress.Commands.add('splitUrl',(url) => {
    const currentURL = url.split('/')
    const id = currentURL[5]
    cy.log(id)
})