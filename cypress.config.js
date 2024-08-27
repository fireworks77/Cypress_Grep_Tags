const { defineConfig } = require('cypress');
const { db } = require('./cypress/dbConfig.js');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 8000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents (on, config) {
      on('task', {
        queryDatabase({ query }) {
          return db.oneOrNone(query);
        },
      });

      on('after:run', (results) => {
        // output failed tests specs to /logs/failed_test_specs.log
        if (results) {
          let failedTestSpecs = [];

          results.runs.forEach((run) => {
            if(JSON.stringify(run.stats.failures) >= 1){
              failedTestSpecs.push(JSON.stringify(run.spec.relative));
            }

            if(failedTestSpecs.length > 0){
              if (!fs.existsSync('./cypress/logs')){
                fs.mkdirSync('./cypress/logs');
              }
              fs.writeFile('./cypress/logs/failed_test_specs.log', failedTestSpecs.toString().replaceAll('"', ''));
            }
          });
        }
      })

      require('@cypress/grep/src/plugin')(config);

      return config
    },
    specPattern: 'cypress/e2e/*spec.js',
  },
  fixturesFolder: false,
  video: false,
})
