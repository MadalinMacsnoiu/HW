const { defineConfig } = require('cypress')
const {JsonSchemaValidation} = require('@jc21/cypress-jsonschema-validation')
const envFile = require("./cypress/fixtures/env.json")
module.exports = defineConfig({

    e2e: {

        experimentalStudio: true,
        setupNodeEvents(on, config) {
          on('task', JsonSchemaValidation(config));
          return config;
        },
        baseUrl: envFile.baseUrl,
        watchForFileChanges: false,
        chromeWebSecurity: false,


    },
});
