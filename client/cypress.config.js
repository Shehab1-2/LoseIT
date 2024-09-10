const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Define the base URL of your React app (if needed)
    baseUrl: "http://localhost:3000", // Adjust based on where your app is running

    // Specify the pattern to find test files
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",  // Look for test files in the e2e folder

    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
