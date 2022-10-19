const {JsonSchemaValidation} = require('@jc21/cypress-jsonschema-validation');
module.exports = (on, config) => {
  // ...
  on('task', JsonSchemaValidation(config));
  // ...
  return config;
};

describe('Basic API checks', () => {
  it('Should return a valid health payload', function () {
    cy.request('https://catfact.ninja/docs/api-docs.json/',"breed").then(rsp => {
      cy.validateJsonSchema(rsp,"./cypress/fixtures/schema.json")
    });
  });
});