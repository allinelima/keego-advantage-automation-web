const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Configurações de eventos e plugins
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{feature,js}',
  },

    // Configurações gerais do Cypress
    specPattern: 'cypress/e2e/**/*.{feature,js}',
    baseUrl: 'https://www.advantageonlineshopping.com',
    viewportWidth: 1000,
    viewportHeight: 660,
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    retries: {
      runMode: 2,
      openMode: 0
    },

    // Identificação do projeto
    projectId: 'shimgr',

    // Outras pastas e opções de execução
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    supportFile: 'cypress/support/index.js',
    video: true
  }
,)