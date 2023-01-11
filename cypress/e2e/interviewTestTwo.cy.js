/// <reference types="cypress" />

describe('Test Two', () => {

})

it('API Test', () => {

    // Suffle to get a fresh deck
    cy.request({
        url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
        method: 'GET'
    }).then((freshDeckResponse) => {
        const deckId = freshDeckResponse.body.deck_id
        

        cy.request({
            url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=6`,
            method: 'GET'
        }).then((drawResponse) => {
            const pileA = 'pileA'
            const pileB = 'pileB'

            cy.request({
                url: `https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileA}/add/?cards=AS,2S,3S`,
                method: 'GET'
            }).then((pileAResponse) => {
                const bodyA = pileAResponse.body
                console.log(bodyA)
            })
    
            cy.request({
                url: `https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileB}/add/?cards=4S,5S,6S`,
                method: 'GET'
            }).then((pileBResponse) => {
                const bodyB = pileBResponse.body
                console.log(bodyB)
            })
        })

        

    })


})