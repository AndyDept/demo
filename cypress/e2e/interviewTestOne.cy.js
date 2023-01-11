/// <reference types="cypress" />

describe('Interview Test One', () => {

})

it('UI Test', () => {
    // Visit the target URL
    cy.visit('https://www.gamesforthebrain.com/game/checkers/')

    // Move my piece
    cy.clickOnPosition(6, 2)
    cy.clickOnPosition(5, 3)

    // Computer move
    cy.yourMove(2, 4)

    // Move my piece
    cy.clickOnPosition(5, 3)
    cy.clickOnPosition(4, 4)

    // Computer move
    cy.yourMove(5, 3)

    // Assert a jump
    cy.assertMyChipsAmount(11)
})