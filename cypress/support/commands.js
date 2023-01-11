// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
/// <reference types="cypress" />

Cypress.Commands.add('clickOnPosition', (column, row) => {
    cy.get(`[name="space${column}${row}"]`).click()
})


Cypress.Commands.add('yourMove', (column, row) => {
    cy.get(`[name="space${column}${row}"]`, {timeout: 5000}).should('have.attr', 'src', 'me1.gif')
})

Cypress.Commands.add('assertMyChipsAmount', (value) => {
    cy.get('[id="board"]').find('[src="you1.gif"]').as('myBoardChips')
    cy.get('@myBoardChips').should('have.length', value)
})