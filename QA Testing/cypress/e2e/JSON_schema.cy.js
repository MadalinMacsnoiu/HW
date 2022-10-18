const {JsonSchemaValidation} = require('@jc21/cypress-jsonschema-validation');
module.exports = (on, config) => {
  // ...
  on('task', JsonSchemaValidation(config));
  // ...
  return config;
};

describe('Basic API checks', () => {
  it('Should return a valid health payload', function () {
    cy.request('https://catfact.ninja/docs/api-docs.json/',"breed").then($response => {
      cy.task('validateJsonSchema', {
        data:           $response.body,
        verbose:        true,                     // optional, default: false
        schemaFile:     'C:\\HW\\QA Testing\\cypress\\e2e\\schema.json',
      }).should('equal', null);
    });
  });
});