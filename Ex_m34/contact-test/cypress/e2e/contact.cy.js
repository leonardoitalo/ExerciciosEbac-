/// <reference types="cypress" />

describe('Tests for contact list', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app')
  })

  it('should add a new contact to the list', () => {
    cy.get('[type="text"]').type('name test')
    cy.get('[type="email"]').type('test@test.com')
    cy.get('[type="tel"]').type('12 1234 1234')
    cy.get('.adicionar').click()

    cy.contains('name test').should('be.visible')
    cy.contains('test@test.com').should('be.visible')
    cy.contains('12 1234 1234').should('be.visible')
  })

  it('should edit the contact in the list', () => {
    cy.get(':last-child > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').clear().type('name test(edited)')
    cy.get('[type="email"]').clear().type('emailtestedited@gmail.com')
    cy.get('[type="tel"]').clear().type('11 1111 1111')
    cy.get('.alterar').click()

    cy.contains('name test(edited)').should('be.visible')
    cy.contains('emailtestedited@gmail.com').should('be.visible')
    cy.contains('11 1111 1111').should('be.visible')
  })

  it('should delete the contact in the list', () => {
    cy.get(':last-child > .sc-gueYoa > .delete').click()

    cy.contains('name test(edited)').should('not.exist')
    cy.contains('emailtestedited@gmail.com').should('not.exist')
    cy.contains('11 1111 1111').should('not.exist')
  })
})