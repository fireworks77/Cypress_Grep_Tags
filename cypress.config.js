const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 8000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents (on, config) {
        require('@cypress/grep/src/plugin')(config);

      return config
    },
    specPattern: '**/*spec.js',
  },
  fixturesFolder: false,
  video: false,
})