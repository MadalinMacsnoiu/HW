
const { defineConfig } = require('cypress')
const {JsonSchemaValidation} = require('@jc21/cypress-jsonschema-validation');
module.exports = defineConfig({

    e2e: {

        experimentalStudio: true,
        setupNodeEvents(on, config) {
          on('task', JsonSchemaValidation(config));
          return config;
        },
        baseUrl:  "http://www.eos-all55481-ro-dev.tgt.e5.c.emag.network/",
        watchForFileChanges: false,
        chromeWebSecurity: false,


    },
});
