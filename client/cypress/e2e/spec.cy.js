describe('My First Test', () => {
  it('Visits the homepage and checks the title', () => {
    // Visit your React app's homepage
    cy.visit('http://localhost:3000') // Adjust the URL to where your React app is running

    // Check if the page contains "Welcome" text
    cy.contains('Lose IT')  // Adjust based on the actual content of your homepage

    // Assert that the title of the page is correct
    cy.title().should('include', 'Home')
  })
})
